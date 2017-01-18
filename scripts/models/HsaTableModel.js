/**
 * HsaTableModel
 */
export default class HsaTableModel {
    constructor(tag = [], title = "", desc = "", value = 0) {
        this.tag = tag;
        this.title = title;
        this.desc = desc;
        this.value = value;
    }
}