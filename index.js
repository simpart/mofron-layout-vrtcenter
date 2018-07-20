/**
 * @file mofron-layout-vrtcenter/index.js
 * @author simpart
 */

/**
 * @class VrtCenter
 * @brief vertical center layout
 */
mofron.layout.VrtCenter = class extends mofron.Layout {
    
    constructor (op) {
        try {
            super();
            this.name('VrtCenter');
            this.prmOpt(op);
            
            this.getParam().check(
                /* rate */
                (rt) => {
                    try {
                        if ('number' !== typeof rt) {
                            throw new Error('invalid parameter');
                        }
                        if ((0 > rt) || (100 < rt)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                },
                /* type */
                (tp) => {
                    try {
                        if (undefined === tp) {
                            return 'relative';
                        }
                        if ('string' !== typeof tp) {
                            throw new Error('invalid parameter');
                        }
                        if (('relative' !== tp) && ('margin' !== tp) && ('padding' !== tp)) {
                            throw new Error('invalid parameter');
                        }
                    } catch (e) {
                        console.error(e.stack);
                        throw e;
                    }
                }
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    contents (idx, tgt) {
        try {
            let rate = this.value()[0];
            let type = this.value()[1];
            
            if ('relative' === type) {
                tgt.adom().style({
                    position : type,
                    top      : (100 -rate)/2 + '%'
                }); 
            } else {    
                let set_style = {};
                set_style[type+'-top'] =  (100 - rate)/2 + '%';
                tgt.adom().style(set_style);
            }
            tgt.height(rate + '%');
            
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    rate (rt) {
        try {
            if (undefined === rt) {
                /* getter */
                return (undefined === this.m_rate) ? null : this.m_rate;
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
module.exports = mofron.layout.VrtCenter;
/* end of file */
