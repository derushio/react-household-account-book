/**
 * HsaTableModel
 */
class HsaTableModel {
    constructor(tags = [], title = "", desc = "", value = 0) {
        this.tags = tags;
        this.title = title;
        this.desc = desc;
        this.value = value;
    }
}

export default HsaTableModel;