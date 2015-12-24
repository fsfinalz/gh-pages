(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    var serial_info = {type: 'serial'};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

   function tryNextDevice() {
        // If potentialDevices is empty, device will be undefined.
        // That will get us back here next time a device is connected.
        device = potentialDevices.shift();

        if (device) {
            device.open({ stopBits: 0, bitRate: 38400, ctsFlowControl: 0 }, deviceOpened);
        }
    }
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
                    [' ', 'my first block', 'my_first_block'],

        ]

        var potentialDevices = [];
		ext._deviceConnected = function(dev) {
    	potentialDevices.push(dev);

	    if (!device) {
    	    tryNextDevice();
    	}
}
    };

    // Register the extension
    ScratchExtensions.register('bitBrick', descriptor, ext, serial_info);
})({});
