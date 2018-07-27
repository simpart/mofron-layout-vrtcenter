/**
 * @file mofron-layout-vrtcenter/index.js
 * @author simpart
 */

/**
 * @class VrtCenter
 * @brief vertical center layout
 */
mofron.layout.VrtCenter = class extends mofron.Layout {
    
    constructor (po, p2) {
        try {
            super();
            this.name('VrtCenter');
            this.prmMap('type', 'rate');
            this.prmOpt(po, p2);
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            if ('relative' === this.type()) {
                tgt.adom().style({
                    position : this.type(),
                    top      : (100 - this.rate())/2 + '%'
                }); 
            } else {    
                let set_style = {};
                set_style[this.type() + '-top'] =  (100 - this.rate())/2 + '%';
                tgt.adom().style(set_style);
            }
            tgt.height(this.rate() + '%');
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return (undefined === this.m_rate) ? null : this.m_rate;
            }
            /* setter */
            if ( ('number' !== typeof prm) ||
                 ((0 > prm) || (100 < prm)) ) {
                throw new Error('invalid parameter');
            }
            this.m_rate = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    type (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return ((undefined === this.m_type) || (null === this.m_type)) ? 'relative' : this.m_type;
            }
            /* setter */
            if ( ((null !== prm) && ('string' !== typeof prm)) ||
                 (('string' === typeof prm) && ('relative' !== prm) && ('margin' !== prm) && ('padding' !== prm)) ) {
                throw new Error('invalid parameter');
            }
            this.m_type = prm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.layout.VrtCenter;
/* end of file */
