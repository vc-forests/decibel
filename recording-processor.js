class RecordingProcessor extends AudioWorkletProcessor {
    constructor(options) {
        super();
        this.sampleRate = 0;
        this.maxRecordingFrames = 0;
        this.numberOfChannels = 0;

        if (options && options.processorOptions) {
            const {
                numberOfChannels,
                sampleRate,
                maxFrameCount,
            } = options.processorOptions;

            this.sampleRate = sampleRate;
            this.maxRecordingFrames = maxFrameCount;
            this.numberOfChannels = numberOfChannels;
        }
    }

    process(inputs, outputs, params) {
        console.log('input', inputs);
        for (let input = 0; input < 1; input++) {
            // channel < inputs[input].length
            for (let channel = 0; channel < this.numberOfChannels; channel++) {
                for (let sample = 0; sample < inputs[input][channel].length; sample++) {
                    const currentSample = inputs[input][channel][sample];
                    // Pass data directly to output, unchanged.
                    outputs[input][channel][sample] = currentSample;
                }
            }
        }
        return true;
    }
}

registerProcessor('recording-processor', RecordingProcessor);