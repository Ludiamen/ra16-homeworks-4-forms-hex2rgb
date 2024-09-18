export function validateHex(value: string) {
    let rgb: number[] = [];
    const reg = /^#([0-9a-f]{6})/;
    if (value.length <= 7) 
        if (reg.test(value)) {
            rgb = [parseInt(value.slice(1, 3), 16), parseInt(value.slice(3, 5), 16), parseInt((value[5] + value[6]), 16)];        
            return rgb
        }
        else {
            return false
        }
    else {
        return false
    }
}