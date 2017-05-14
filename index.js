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
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    layoutConts (idx, tgt) {
        try {
            if (true === this.isPadding()) {
                return;
            }
            
            tgt.style({
                position : 'relative'
            });
            
            if (null !== this.rate()) {
                tgt.style({
                    height : this.rate() + '%',
                    top    : (100 - this.rate())/2 + '%'
                });
            } else if (null !== this.height()) {
                this.isPadding(true);
                var ins_cmp = new mofron.Component({
                                  addChild : tgt,
                                  style    : {
                                                 height   : '50%',
                                                 position : 'relative',
                                                 top      : '50%'
                                             }
                              });
                ins_cmp.vdom().attr({
                    layout : 'mofron-layout-vrtcenter'
                });
                this.target().addChild(
                    ins_cmp,
                    tgt.visible(),
                    (0 === this.target().child().length) ? 0 : idx
                );
                
                this.isPadding(false);
                tgt.style({
                    top : '-' + this.height()/2 + 'px'
                });
            }
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
    
    height (hei) {
        try {
            if (undefined === hei) {
                /* getter */
                return (undefined === this.m_height) ? null : this.m_height;
            }
            /* setter */
            if (('number' !== typeof hei) && ('string' !== typeof hei)) {
                throw new Error('invalid parameter');
            }
            this.m_height = hei;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    isPadding (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_padding) ? false : this.m_padding;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_padding = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mofron.layout.vrtcenter = {};
module.exports = mofron.layout.VrtCenter;
