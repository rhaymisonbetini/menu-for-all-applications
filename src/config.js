'use strict'

class Config {

    /**
     * This method return a icons to display in the menu circle
     * @returns Object
     */
    getIcons() {
        return {
            menurounded: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgElEQVR4nO3c227SABzH8ZYNWFtfwPlcJhSYojDEAdMB3a3P4SVsbA7Y1DHnYZ51HOY4XHjlWxh2/zelTfTKSGvSLXw/ye8Ffi2l0F+qKAAAAAAAAAAAAMB8K/6IKpVxUdkc9VRrdKFaI1GtoagVOwMn5fNpQuVvEirZOXOy0XfTk9DDrixM05GFB3ZOnax/dfNFFot2PjspfJLFwkcn+Q/ThPPvJbxm552T+2/dnEg4dyKR3BuJ5F5L5J6dV06yL90cS2T1WKKrL5xkjty0JZo+dPNclu7aeebkzlM3B7KUsrMvWqol2m07TSe3Gm72RFvZE33lyYW+stvVkrsF5WYj4q/8jdENxRqPlc2xqJYdytf+Xr6T5O40WqI+1GI7y97PfMoXr+XryR3RE3XR4vWBt0/C5nidM//AV/nTxLfFiG/nZz8A1rjPZWf/f5Qvhlnrzty/WhlNuOa3/Jcf3xLdrE08HIDhhLudlu/yDXNL9Fj15+wHwBr2uNVs+i7fMGtixGqdmQ+AUh4UuM9v+i/frMk1s7o2+wF49D2iVgZDfmQ1fJVvxGrnSvZxWPHEGiyr5fMhv3D3PJevJ7aueyv/j09CqHSWD5XOOqFSfzKnfy/IP3/hmtWJblZPp5cdz2c+AAAAAAAA5hO7IGEXlL+a/5qyC8oG/5c1u6DVS/G8gF1QNMiHNeyCjgJ9UsYuKBPwY0p2Qe3AymcXlAm4fHZBh4GWzy4oHWz57ILS7IIAAAAAAABwVbALEnZBeXZBvKwpxS5Irsoijl1Q9lKVzy4oyi5ozl9fEON9QcIuaA7PfINdUDvw8tkFpdkFzdVlR+d9QQAAAAAAAAAAAIDy2y9uE82QwEj4WgAAAABJRU5ErkJggg==",
            error: "data:image/png;base64,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"
        }
    }

    /**
     * This method return css Styles
     * @returns Object
     */
    getCss() {
        return {
            circleBottom: "position:fixed; bottom:50px; right:50px; width:60px; height:60px; border:2px solid #fff; background: #fff; z-index: 99999999999999; border-radius:50%;cursor: pointer; display:flex; justify-content:center;align-items:center",
            menuNormal: "position:fixed; top:50px; width:100%; height:100px;background: #06d1d1; z-index: 99999999999999; pointer; display:flex; justify-content:center;align-items:center; opacity:0display:flex; justify-content:center;align-items:center",
            menuMobile: "position:fixed; top:50px; width:100%; min-height:100vh; height:auto; padding-top:15px; background: #06d1d1; z-index: 99999999999999; pointer; display:flex; flex-direction:column;align-items:center; opacity:0display:flex;",
            linkMenuDefault: `font-size: 24px; padding: 10px;font-weight: bold; text-decoration: none; color: #fff`,
            mouseHoverLink: `font-size: 24px; padding: 10px; color:#757575 !important`,
            mouseOutLink: `font-size: 24px; padding: 10px;font-weight: bold; text-decoration: none; color: #fff`,
            iconSizes: "width:50px; height:50px;"
        }
    }

    /**
     * This method return general Configuration
     * @returns Object
     */
    getGeneralConfig() {
        return {
            limitWidth: 800,
            faddeInTimer: 0.00001
        }
    }
}

module.exports = Config