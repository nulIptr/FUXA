
export class Device {
    id: string;
    name: string;
    enabled: boolean;
    property: any;
    type: DeviceType;
    tags: { [index: string]: Tag;};
}

export class DeviceStatus {
    id: string;
    status: string;
}

export class Tag {
    id: string;
    name: string;
    value: string;
    type: string;
    address: string;
    min: string;
    max: string;
    access: string;
}

export class DeviceNetProperty {
    address: string;
    port: string;
    slot: string;
    rack: string;
}

export enum DeviceType {
    FuxaServer = 'FuxaServer',
    SiemensS7 = 'SiemensS7',
    OPCUA = 'OPCUA',
    Kingdee = 'Kingdee'
}

export enum TagType {
    Bool = 'Bool',
    Byte = 'Byte',
    Int = 'Int',
    Word = 'Word',
    DInt = 'DInt',
    DWord = 'DWord',
    Real = 'Real'
}