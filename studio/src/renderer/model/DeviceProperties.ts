import { OPENMEA_ELECTRODE_EXISTS, OPENMEA_ELECTRODE_MAP, OPENMEA_ELECTRODE_NAMES } from "client/Constants";
export class DeviceProperties {
    name: string = ""
    canRecordToFile: boolean = false
    canStimulate: boolean = false
    canControlSampling: boolean = false
    canControlReplay: boolean = false
    canSampleDC: boolean = false
    numElectrodes: number = 0
    numElectrodeRows: number = 0
    electrodeMap: (number|null)[] = []
    electrodeExistsMap: boolean[] = []
    electrodeNames: (string|null)[] = []

    constructor(init?: Partial<DeviceProperties>) {
        if (!init) {
            this.electrodeMap = OPENMEA_ELECTRODE_MAP;
            this.electrodeNames = OPENMEA_ELECTRODE_NAMES;
            this.electrodeExistsMap = OPENMEA_ELECTRODE_EXISTS;
            return
        }

        Object.assign(this, init)
        this.electrodeMap = OPENMEA_ELECTRODE_MAP; //init.electrodeMap ||
        this.electrodeNames =  OPENMEA_ELECTRODE_NAMES; //init.electrodeNames ||
        this.electrodeExistsMap =  OPENMEA_ELECTRODE_EXISTS; //init.electrodeExistsMap ||
    }
}

