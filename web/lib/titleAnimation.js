function MovingTitle(writeText, interval, visibleLetters) {
    var _instance = {};

    var _currId = 0;
    var _numberOfLetters = writeText.length;

    function updateTitle() {
        _currId += 1;
        if(_currId > _numberOfLetters - 1) {
            _currId = 0; 
        }

        var startId = _currId;
        var endId = startId + visibleLetters;
        var finalText;
        if(endId < _numberOfLetters - 1) {
            finalText = writeText.substring(startId, endId);
        } else {
            var cappedEndId = _numberOfLetters;
            endId = endId - cappedEndId;

            finalText = writeText.substring(startId, cappedEndId) +     writeText.substring(0, endId);
        }

        document.title = finalText; 
    }

    _instance.init = function() {
        setInterval(updateTitle, interval);
    };

    return _instance;
}