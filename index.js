/**
 * @file mofron-layout-vrtcenter/index.js
 * @author simpart
 */

/**
 * @class VrtCenter
 * @brief vertical center layout
 * @note this is interface class
 */
mofron.layout.VrtCenter = class extends mofron.Layout {
    
    constructor (rt) {
        try {
            super();
            this.name('VrtCenter');
            this.rate(rt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (rt) {
        try {
            if (undefined === rt) {
                /* getter */
                return (undefined === this.m_rate) ? 80 : this.m_rate;
            }
            /* setter */
            if (('number' !== typeof rt) || (0 > rt)) {
                throw new Error('invalid parameter');
            }
            this.m_rate = rt;
            if ((null !== this.target()) && (true === this.target().vdom().isPushed())) {
                this.execute();
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.layout.vrtcenter = {};
module.exports = mofron.layout.VrtCenter;
