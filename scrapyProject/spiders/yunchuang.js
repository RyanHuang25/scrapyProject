(window.webpackJsonp = window.webpackJsonp || []).push([[10, 18], {
    1000: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(647))
          , i = o(n(787))
          , s = o(n(788))
          , l = o(n(583))
          , c = o(n(584))
          , u = o(n(586))
          , d = o(n(588))
          , p = o(n(587))
          , f = o(n(589))
          , h = o(n(2))
          , m = a(n(0))
          , v = o(n(52))
          , y = o(n(1003))
          , b = o(n(834))
          , g = o(n(835))
          , k = o(n(836))
          , S = o(n(837))
          , E = o(n(840))
          , A = o(n(841))
          , w = o(n(842))
          , C = a(n(1016))
          , O = n(746)
          , T = n(630)
          , P = o(n(833))
          , I = {
            children: h.default.any,
            width: h.default.oneOfType([h.default.string, h.default.number]),
            height: h.default.oneOfType([h.default.string, h.default.number]),
            fluid: h.default.bool,
            muted: h.default.bool,
            playsInline: h.default.bool,
            aspectRatio: h.default.string,
            className: h.default.string,
            videoId: h.default.string,
            startTime: h.default.number,
            loop: h.default.bool,
            autoPlay: h.default.bool,
            src: h.default.string,
            poster: h.default.string,
            preload: h.default.oneOf(["auto", "metadata", "none"]),
            onLoadStart: h.default.func,
            onWaiting: h.default.func,
            onCanPlay: h.default.func,
            onCanPlayThrough: h.default.func,
            onPlaying: h.default.func,
            onEnded: h.default.func,
            onSeeking: h.default.func,
            onSeeked: h.default.func,
            onPlay: h.default.func,
            onPause: h.default.func,
            onProgress: h.default.func,
            onDurationChange: h.default.func,
            onError: h.default.func,
            onSuspend: h.default.func,
            onAbort: h.default.func,
            onEmptied: h.default.func,
            onStalled: h.default.func,
            onLoadedMetadata: h.default.func,
            onLoadedData: h.default.func,
            onTimeUpdate: h.default.func,
            onRateChange: h.default.func,
            onVolumeChange: h.default.func,
            store: h.default.object
        }
          , N = function(e) {
            function t(e) {
                var n;
                return (0,
                l.default)(this, t),
                (n = (0,
                u.default)(this, (0,
                d.default)(t).call(this, e))).controlsHideTimer = null,
                n.video = null,
                n.manager = new y.default(e.store),
                n.actions = n.manager.getActions(),
                n.manager.subscribeToPlayerStateChange(n.handleStateChange.bind((0,
                p.default)(n))),
                n.getStyle = n.getStyle.bind((0,
                p.default)(n)),
                n.handleResize = n.handleResize.bind((0,
                p.default)(n)),
                n.getChildren = n.getChildren.bind((0,
                p.default)(n)),
                n.handleMouseMove = (0,
                T.throttle)(n.handleMouseMove.bind((0,
                p.default)(n)), 250),
                n.handleMouseDown = n.handleMouseDown.bind((0,
                p.default)(n)),
                n.startControlsTimer = n.startControlsTimer.bind((0,
                p.default)(n)),
                n.handleFullScreenChange = n.handleFullScreenChange.bind((0,
                p.default)(n)),
                n.handleKeyDown = n.handleKeyDown.bind((0,
                p.default)(n)),
                n.handleFocus = n.handleFocus.bind((0,
                p.default)(n)),
                n.handleBlur = n.handleBlur.bind((0,
                p.default)(n)),
                n
            }
            return (0,
            f.default)(t, e),
            (0,
            c.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.handleResize(),
                    window.addEventListener("resize", this.handleResize),
                    P.default.addEventListener(this.handleFullScreenChange)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    window.removeEventListener("resize", this.handleResize),
                    P.default.removeEventListener(this.handleFullScreenChange),
                    this.controlsHideTimer && window.clearTimeout(this.controlsHideTimer)
                }
            }, {
                key: "getDefaultChildren",
                value: function(e) {
                    var t = this;
                    return [m.default.createElement(S.default, {
                        ref: function(e) {
                            t.video = e,
                            t.manager.video = t.video
                        },
                        key: "video",
                        order: 0
                    }, e), m.default.createElement(k.default, {
                        key: "poster-image",
                        order: 1
                    }), m.default.createElement(g.default, {
                        key: "loading-spinner",
                        order: 2
                    }), m.default.createElement(E.default, {
                        key: "bezel",
                        order: 3
                    }), m.default.createElement(b.default, {
                        key: "big-play-button",
                        order: 4
                    }), m.default.createElement(w.default, {
                        key: "control-bar",
                        order: 5
                    }), m.default.createElement(A.default, {
                        key: "shortcut",
                        order: 99
                    })]
                }
            }, {
                key: "getChildren",
                value: function(e) {
                    e.className;
                    var t = e.children
                      , n = (0,
                    s.default)(e, ["className", "children"])
                      , a = m.default.Children.toArray(this.props.children).filter(function(e) {
                        return !(0,
                        T.isVideoChild)(e)
                    })
                      , o = this.getDefaultChildren(t);
                      console.log(o)
                    return (0,
                    T.mergeAndSortChildren)(o, a, n)
                }
            }, {
                key: "setWidthOrHeight",
                value: function(e, t, n) {
                    var a;
                    "string" === typeof n ? "auto" === n ? a = "auto" : n.match(/\d+%/) && (a = n) : "number" === typeof n && (a = "".concat(n, "px")),
                    Object.assign(e, (0,
                    i.default)({}, t, a))
                }
            }, {
                key: "getStyle",
                value: function() {
                    var e, t, n = this.props, a = n.fluid, o = n.aspectRatio, r = n.height, i = n.width, s = this.manager.getState().player, l = {}, c = (void 0 !== o && "auto" !== o ? o : s.videoWidth ? "".concat(s.videoWidth, ":").concat(s.videoHeight) : "16:9").split(":"), u = c[1] / c[0];
                    return e = void 0 !== i ? i : void 0 !== r ? r / u : s.videoWidth || 400,
                    t = void 0 !== r ? r : e * u,
                    a ? l.paddingTop = "".concat(100 * u, "%") : (this.setWidthOrHeight(l, "width", e),
                    this.setWidthOrHeight(l, "height", t)),
                    l
                }
            }, {
                key: "getState",
                value: function() {
                    return this.manager.getState()
                }
            }, {
                key: "play",
                value: function() {
                    this.video.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this.video.pause()
                }
            }, {
                key: "load",
                value: function() {
                    this.video.load()
                }
            }, {
                key: "addTextTrack",
                value: function() {
                    var e;
                    (e = this.video).addTextTrack.apply(e, arguments)
                }
            }, {
                key: "canPlayType",
                value: function() {
                    var e;
                    (e = this.video).canPlayType.apply(e, arguments)
                }
            }, {
                key: "seek",
                value: function(e) {
                    this.video.seek(e)
                }
            }, {
                key: "forward",
                value: function(e) {
                    this.video.forward(e)
                }
            }, {
                key: "replay",
                value: function(e) {
                    this.video.replay(e)
                }
            }, {
                key: "toggleFullscreen",
                value: function() {
                    this.video.toggleFullscreen()
                }
            }, {
                key: "subscribeToStateChange",
                value: function(e) {
                    return this.manager.subscribeToPlayerStateChange(e)
                }
            }, {
                key: "handleResize",
                value: function() {}
            }, {
                key: "handleFullScreenChange",
                value: function(e) {
                    e.target === this.manager.rootElement && this.actions.handleFullscreenChange(P.default.isFullscreen)
                }
            }, {
                key: "handleMouseDown",
                value: function() {
                    this.startControlsTimer()
                }
            }, {
                key: "handleMouseMove",
                value: function() {
                    this.startControlsTimer()
                }
            }, {
                key: "handleKeyDown",
                value: function() {
                    this.startControlsTimer()
                }
            }, {
                key: "startControlsTimer",
                value: function() {
                    var e = this
                      , t = 3e3;
                    m.default.Children.forEach(this.props.children, function(e) {
                        if (m.default.isValidElement(e) && e.type === w.default) {
                            var n = e.props.autoHideTime;
                            "number" === typeof n && (t = n)
                        }
                    }),
                    this.actions.userActivate(!0),
                    clearTimeout(this.controlsHideTimer),
                    this.controlsHideTimer = setTimeout(function() {
                        e.actions.userActivate(!1)
                    }, t)
                }
            }, {
                key: "handleStateChange",
                value: function(e, t) {
                    e.isFullscreen !== t.isFullscreen && (this.handleResize(),
                    (0,
                    O.focusNode)(this.manager.rootElement)),
                    this.forceUpdate()
                }
            }, {
                key: "handleFocus",
                value: function() {
                    this.actions.activate(!0)
                }
            }, {
                key: "handleBlur",
                value: function() {
                    this.actions.activate(!1)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.fluid
                      , n = this.manager.getState().player
                      , a = n.paused
                      , o = n.hasStarted
                      , i = n.waiting
                      , s = n.seeking
                      , l = n.isFullscreen
                      , c = n.userActivity
                      , u = (0,
                    r.default)({}, this.props, {
                        player: n,
                        actions: this.actions,
                        manager: this.manager,
                        store: this.manager.store,
                        video: this.video ? this.video.video : null
                    })
                      , d = this.getChildren(u);
                    return m.default.createElement("div", {
                        className: (0,
                        v.default)({
                            "video-react-controls-enabled": !0,
                            "video-react-has-started": o,
                            "video-react-paused": a,
                            "video-react-playing": !a,
                            "video-react-waiting": i,
                            "video-react-seeking": s,
                            "video-react-fluid": t,
                            "video-react-fullscreen": l,
                            "video-react-user-inactive": !c,
                            "video-react-user-active": c,
                            "video-react-workinghover": !C.IS_IOS
                        }, "video-react", this.props.className),
                        style: this.getStyle(),
                        ref: function(t) {
                            e.manager.rootElement = t
                        },
                        role: "region",
                        onTouchStart: this.handleMouseDown,
                        onMouseDown: this.handleMouseDown,
                        onTouchMove: this.handleMouseMove,
                        onMouseMove: this.handleMouseMove,
                        onKeyDown: this.handleKeyDown,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        tabIndex: "-1"
                    }, d)
                }
            }, {
                key: "playbackRate",
                get: function() {
                    return this.video.playbackRate
                },
                set: function(e) {
                    this.video.playbackRate = e
                }
            }, {
                key: "muted",
                get: function() {
                    return this.video.muted
                },
                set: function(e) {
                    this.video.muted = e
                }
            }, {
                key: "volume",
                get: function() {
                    return this.video.volume
                },
                set: function(e) {
                    this.video.volume = e
                }
            }, {
                key: "videoWidth",
                get: function() {
                    return this.video.videoWidth
                }
            }, {
                key: "videoHeight",
                get: function() {
                    return this.video.videoHeight
                }
            }]),
            t
        }(m.Component);
        t.default = N,
        N.contextTypes = {
            store: h.default.object
        },
        N.propTypes = I,
        N.defaultProps = {
            fluid: !0,
            muted: !1,
            playsInline: !1,
            preload: "auto",
            aspectRatio: "auto"
        },
        N.displayName = "Player"
    },
    1001: function(e, t) {
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, a, o = {}, r = Object.keys(e);
            for (a = 0; a < r.length; a++)
                n = r[a],
                t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1002: function(e, t) {
        function n(t, a) {
            return e.exports = n = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0,
            n(t, a)
        }
        e.exports = n,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1003: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(647))
          , i = o(n(583))
          , s = o(n(584))
          , l = n(93)
          , c = o(n(832))
          , u = a(n(745))
          , d = a(n(699))
          , p = function() {
            function e(t) {
                (0,
                i.default)(this, e),
                this.store = t || (0,
                l.createStore)(c.default),
                this.video = null,
                this.rootElement = null
            }
            return (0,
            s.default)(e, [{
                key: "getActions",
                value: function() {
                    var e = this
                      , t = this.store.dispatch
                      , n = (0,
                    r.default)({}, u, d);
                    return Object.keys(n).filter(function(e) {
                        return "function" === typeof n[e]
                    }).reduce(function(a, o) {
                        var r;
                        return a[o] = (r = n[o],
                        function() {
                            var n = r.apply(e, arguments);
                            "undefined" !== typeof n && t(n)
                        }
                        ),
                        a
                    }, {})
                }
            }, {
                key: "getState",
                value: function() {
                    return this.store.getState()
                }
            }, {
                key: "subscribeToStateChange",
                value: function(e, t) {
                    t || (t = this.getState.bind(this));
                    var n = t();
                    return this.store.subscribe(function() {
                        var a = t();
                        if (a !== n) {
                            var o = n;
                            n = a,
                            e(a, o)
                        }
                    })
                }
            }, {
                key: "subscribeToOperationStateChange",
                value: function(e) {
                    var t = this;
                    return this.subscribeToStateChange(e, function() {
                        return t.getState().operation
                    })
                }
            }, {
                key: "subscribeToPlayerStateChange",
                value: function(e) {
                    var t = this;
                    return this.subscribeToStateChange(e, function() {
                        return t.getState().player
                    })
                }
            }]),
            e
        }();
        t.default = p
    },
    1004: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case i.USER_ACTIVATE:
                return (0,
                o.default)({}, e, {
                    userActivity: t.activity
                });
            case i.PLAYER_ACTIVATE:
                return (0,
                o.default)({}, e, {
                    isActive: t.activity
                });
            case i.FULLSCREEN_CHANGE:
                return (0,
                o.default)({}, e, {
                    isFullscreen: !!t.isFullscreen
                });
            case r.SEEKING_TIME:
                return (0,
                o.default)({}, e, {
                    seekingTime: t.time
                });
            case r.END_SEEKING:
                return (0,
                o.default)({}, e, {
                    seekingTime: 0
                });
            case r.LOAD_START:
                return (0,
                o.default)({}, e, t.videoProps, {
                    hasStarted: !1,
                    ended: !1
                });
            case r.CAN_PLAY:
                return (0,
                o.default)({}, e, t.videoProps, {
                    waiting: !1
                });
            case r.WAITING:
                return (0,
                o.default)({}, e, t.videoProps, {
                    waiting: !0
                });
            case r.CAN_PLAY_THROUGH:
            case r.PLAYING:
                return (0,
                o.default)({}, e, t.videoProps, {
                    waiting: !1
                });
            case r.PLAY:
                return (0,
                o.default)({}, e, t.videoProps, {
                    ended: !1,
                    paused: !1,
                    autoPaused: !1,
                    waiting: !1,
                    hasStarted: !0
                });
            case r.PAUSE:
                return (0,
                o.default)({}, e, t.videoProps, {
                    paused: !0
                });
            case r.END:
                return (0,
                o.default)({}, e, t.videoProps, {
                    ended: !0
                });
            case r.SEEKING:
                return (0,
                o.default)({}, e, t.videoProps, {
                    seeking: !0
                });
            case r.SEEKED:
                return (0,
                o.default)({}, e, t.videoProps, {
                    seeking: !1
                });
            case r.ERROR:
                return (0,
                o.default)({}, e, t.videoProps, {
                    error: "UNKNOWN ERROR",
                    ended: !0
                });
            case r.DURATION_CHANGE:
            case r.TIME_UPDATE:
            case r.VOLUME_CHANGE:
            case r.PROGRESS_CHANGE:
            case r.RATE_CHANGE:
            case r.SUSPEND:
            case r.ABORT:
            case r.EMPTIED:
            case r.STALLED:
            case r.LOADED_META_DATA:
            case r.LOADED_DATA:
            case r.RESIZE:
                return (0,
                o.default)({}, e, t.videoProps);
            case r.ACTIVATE_TEXT_TRACK:
                return (0,
                o.default)({}, e, {
                    activeTextTrack: t.textTrack
                });
            default:
                return e
            }
        }
        ;
        var o = a(n(647))
          , r = n(699)
          , i = n(745)
          , s = {
            currentSrc: null,
            duration: 0,
            currentTime: 0,
            seekingTime: 0,
            buffered: null,
            waiting: !1,
            seeking: !1,
            paused: !0,
            autoPaused: !1,
            ended: !1,
            playbackRate: 1,
            muted: !1,
            volume: 1,
            readyState: 0,
            networkState: 0,
            videoWidth: 0,
            videoHeight: 0,
            hasStarted: !1,
            userActivity: !0,
            isActive: !1,
            isFullscreen: !1,
            activeTextTrack: null
        }
    },
    1005: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case r.OPERATE:
                return (0,
                o.default)({}, e, {
                    count: e.count + 1,
                    operation: (0,
                    o.default)({}, e.operation, t.operation)
                });
            default:
                return e
            }
        }
        ;
        var o = a(n(647))
          , r = n(745)
          , i = {
            count: 0,
            operation: {
                action: "",
                source: ""
            }
        }
    },
    1006: function(e, t, n) {
        var a = n(839);
        e.exports = function(e) {
            if (Array.isArray(e))
                return a(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1007: function(e, t) {
        e.exports = function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                return Array.from(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1008: function(e, t, n) {
        var a = n(839);
        e.exports = function(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return a(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
            }
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1009: function(e, t) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1010: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = p;
        var o = a(n(695))
          , r = a(n(647))
          , i = a(n(2))
          , s = a(n(0))
          , l = a(n(52))
          , c = a(n(858))
          , u = a(n(1011))
          , d = {
            inline: i.default.bool,
            onClick: i.default.func.isRequired,
            onFocus: i.default.func,
            onBlur: i.default.func,
            className: i.default.string
        };
        function p(e) {
            var t = e.inline
              , n = e.className
              , a = (0,
            r.default)({}, e);
            return delete a.children,
            delete a.inline,
            delete a.className,
            s.default.createElement(c.default, (0,
            o.default)({
                className: (0,
                l.default)(n, {
                    "video-react-menu-button-inline": !!t,
                    "video-react-menu-button-popup": !t
                }, "video-react-control video-react-button video-react-menu-button")
            }, a), s.default.createElement(u.default, e))
        }
        p.propTypes = d,
        p.defaultProps = {
            inline: !0
        },
        p.displayName = "PopupButton"
    },
    1011: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = {
            player: d.default.object,
            children: d.default.any
        }
          , h = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleClick",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.children;
                    return p.default.createElement("div", {
                        className: "video-react-menu",
                        onClick: this.handleClick
                    }, p.default.createElement("div", {
                        className: "video-react-menu-content"
                    }, e))
                }
            }]),
            t
        }(p.Component);
        t.default = h,
        h.propTypes = f,
        h.displayName = "Popup"
    },
    1012: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(695))
          , i = o(n(583))
          , s = o(n(584))
          , l = o(n(586))
          , c = o(n(588))
          , u = o(n(587))
          , d = o(n(589))
          , p = o(n(2))
          , f = a(n(0))
          , h = o(n(52))
          , m = o(n(789))
          , v = o(n(1013))
          , y = {
            actions: p.default.object,
            player: p.default.object,
            className: p.default.string,
            onFocus: p.default.func,
            onBlur: p.default.func
        }
          , b = function(e) {
            function t(e, n) {
                var a;
                return (0,
                i.default)(this, t),
                (a = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e, n))).state = {
                    percentage: "0%"
                },
                a.handleMouseMove = a.handleMouseMove.bind((0,
                u.default)(a)),
                a.handlePercentageChange = a.handlePercentageChange.bind((0,
                u.default)(a)),
                a.checkMuted = a.checkMuted.bind((0,
                u.default)(a)),
                a.getPercent = a.getPercent.bind((0,
                u.default)(a)),
                a.stepForward = a.stepForward.bind((0,
                u.default)(a)),
                a.stepBack = a.stepBack.bind((0,
                u.default)(a)),
                a.handleFocus = a.handleFocus.bind((0,
                u.default)(a)),
                a.handleBlur = a.handleBlur.bind((0,
                u.default)(a)),
                a.handleClick = a.handleClick.bind((0,
                u.default)(a)),
                a
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "getPercent",
                value: function() {
                    var e = this.props.player;
                    return e.muted ? 0 : e.volume
                }
            }, {
                key: "checkMuted",
                value: function() {
                    var e = this.props
                      , t = e.player
                      , n = e.actions;
                    t.muted && n.mute(!1)
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    var t = this.props.actions;
                    this.checkMuted();
                    var n = this.slider.calculateDistance(e);
                    t.changeVolume(n)
                }
            }, {
                key: "stepForward",
                value: function() {
                    var e = this.props
                      , t = e.player
                      , n = e.actions;
                    this.checkMuted(),
                    n.changeVolume(t.volume + .1)
                }
            }, {
                key: "stepBack",
                value: function() {
                    var e = this.props
                      , t = e.player
                      , n = e.actions;
                    this.checkMuted(),
                    n.changeVolume(t.volume - .1)
                }
            }, {
                key: "handleFocus",
                value: function(e) {
                    this.props.onFocus && this.props.onFocus(e)
                }
            }, {
                key: "handleBlur",
                value: function(e) {
                    this.props.onBlur && this.props.onBlur(e)
                }
            }, {
                key: "handlePercentageChange",
                value: function(e) {
                    e !== this.state.percentage && this.setState({
                        percentage: e
                    })
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    e.stopPropagation()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.player
                      , a = t.className
                      , o = (100 * n.volume).toFixed(2);
                    return f.default.createElement(m.default, (0,
                    r.default)({
                        ref: function(t) {
                            e.slider = t
                        },
                        label: "volume level",
                        valuenow: o,
                        valuetext: "".concat(o, "%"),
                        onMouseMove: this.handleMouseMove,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onClick: this.handleClick,
                        sliderActive: this.handleFocus,
                        sliderInactive: this.handleBlur,
                        getPercent: this.getPercent,
                        onPercentageChange: this.handlePercentageChange,
                        stepForward: this.stepForward,
                        stepBack: this.stepBack
                    }, this.props, {
                        className: (0,
                        h.default)(a, "video-react-volume-bar video-react-slider-bar")
                    }), f.default.createElement(v.default, this.props))
                }
            }]),
            t
        }(f.Component);
        b.propTypes = y,
        b.displayName = "VolumeBar";
        var g = b;
        t.default = g
    },
    1013: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = {
            percentage: o.default.string,
            vertical: o.default.bool,
            className: o.default.string
        };
        function l(e) {
            var t = e.percentage
              , n = e.vertical
              , a = e.className
              , o = {};
            return n ? o.height = t : o.width = t,
            r.default.createElement("div", {
                className: (0,
                i.default)(a, "video-react-volume-level"),
                style: o
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }))
        }
        l.propTypes = s,
        l.defaultProps = {
            percentage: "100%",
            vertical: !1
        },
        l.displayName = "VolumeLevel";
        var c = l;
        t.default = c
    },
    1014: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = {
            children: d.default.any
        }
          , h = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleClick",
                value: function(e) {
                    e.preventDefault()
                }
            }, {
                key: "render",
                value: function() {
                    return p.default.createElement("div", {
                        className: "video-react-menu video-react-lock-showing",
                        role: "presentation",
                        onClick: this.handleClick
                    }, p.default.createElement("ul", {
                        className: "video-react-menu-content"
                    }, this.props.children))
                }
            }]),
            t
        }(p.Component);
        t.default = h,
        h.propTypes = f,
        h.displayName = "Menu"
    },
    1015: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = {
            item: d.default.object,
            index: d.default.number,
            activateIndex: d.default.number,
            onSelectItem: d.default.func
        }
          , m = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleClick",
                value: function() {
                    var e = this.props
                      , t = e.index;
                    (0,
                    e.onSelectItem)(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.item
                      , n = e.index
                      , a = e.activateIndex;
                    return p.default.createElement("li", {
                        className: (0,
                        f.default)({
                            "video-react-menu-item": !0,
                            "video-react-selected": n === a
                        }),
                        role: "menuitem",
                        onClick: this.handleClick
                    }, t.label, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }))
                }
            }]),
            t
        }(p.Component);
        t.default = m,
        m.propTypes = h,
        m.displayName = "MenuItem"
    },
    1016: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.IS_IOS = t.IS_IPOD = t.IS_IPHONE = t.IS_IPAD = void 0;
        var a = "undefined" !== typeof window && window.navigator ? window.navigator.userAgent : ""
          , o = /iPad/i.test(a);
        t.IS_IPAD = o;
        var r = /iPhone/i.test(a) && !o;
        t.IS_IPHONE = r;
        var i = /iPod/i.test(a);
        t.IS_IPOD = i;
        var s = r || o || i;
        t.IS_IOS = s
    },
    1017: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(589))
          , u = a(n(0))
          , d = o(n(790))
          , p = n(630)
          , f = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n)),
                (0,
                p.deprecatedWarning)("PlaybackRate", "PlaybackRateMenuButton"),
                a
            }
            return (0,
            c.default)(t, e),
            (0,
            i.default)(t, [{
                key: "render",
                value: function() {
                    return u.default.createElement(d.default, this.props)
                }
            }]),
            t
        }(u.Component);
        t.default = f,
        f.displayName = "PlaybackRate"
    },
    1018: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = o(n(791))
          , m = {
            player: d.default.object,
            actions: d.default.object,
            className: d.default.string,
            offMenuText: d.default.string,
            showOffMenu: d.default.bool,
            kinds: d.default.array
        }
          , v = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).getTextTrackItems = a.getTextTrackItems.bind((0,
                c.default)(a)),
                a.updateState = a.updateState.bind((0,
                c.default)(a)),
                a.handleSelectItem = a.handleSelectItem.bind((0,
                c.default)(a)),
                a.state = a.getTextTrackItems(),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentDidUpdate",
                value: function() {
                    this.updateState()
                }
            }, {
                key: "getTextTrackItems",
                value: function() {
                    var e = this.props
                      , t = e.kinds
                      , n = e.player
                      , a = e.offMenuText
                      , o = e.showOffMenu
                      , r = n.textTracks
                      , i = n.activeTextTrack
                      , s = {
                        items: [],
                        selectedIndex: 0
                    }
                      , l = Array.from(r || []);
                    return 0 === l.length ? s : (o && s.items.push({
                        label: a || "Off",
                        value: null
                    }),
                    l.forEach(function(e) {
                        t.length && !t.includes(e.kind) || s.items.push({
                            label: e.label,
                            value: e.language
                        })
                    }),
                    s.selectedIndex = s.items.findIndex(function(e) {
                        return i && i.language === e.value
                    }),
                    -1 === s.selectedIndex && (s.selectedIndex = 0),
                    s)
                }
            }, {
                key: "updateState",
                value: function() {
                    var e = this.getTextTrackItems();
                    e.selectedIndex === this.state.selectedIndex && this.textTrackItemsAreEqual(e.items, this.state.items) || this.setState(e)
                }
            }, {
                key: "textTrackItemsAreEqual",
                value: function(e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (var n = 0; n < e.length; n++)
                        if (!t[n] || e[n].label !== t[n].label || e[n].value !== t[n].value)
                            return !1;
                    return !0
                }
            }, {
                key: "handleSelectItem",
                value: function(e) {
                    var t = this.props
                      , n = t.player
                      , a = t.actions
                      , o = t.showOffMenu
                      , r = n.textTracks;
                    Array.from(r).forEach(function(t, n) {
                        e === (o ? n + 1 : n) ? (t.mode = "showing",
                        a.activateTextTrack(t)) : t.mode = "hidden"
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state
                      , t = e.items
                      , n = e.selectedIndex;
                    return p.default.createElement(h.default, {
                        className: (0,
                        f.default)("video-react-closed-caption", this.props.className),
                        onSelectItem: this.handleSelectItem,
                        items: t,
                        selectedIndex: n
                    }, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }, "Closed Caption"))
                }
            }]),
            t
        }(p.Component);
        v.propTypes = m,
        v.defaultProps = {
            offMenuText: "Off",
            showOffMenu: !0,
            kinds: ["captions", "subtitles"]
        },
        v.displayName = "ClosedCaptionButton";
        var y = v;
        t.default = y
    },
    1025: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    1026: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    1027: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    1028: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    1029: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    1030: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAABR0lEQVRIS+2Uv06DUBTGv4MkmrQa+wTdcHVpvSOJHepLII4SX4e4UlcfQAeNK+jiWn0IjYLBWDiGpm0ofy+NiQus93y/yz3f+Q6h5hOmz+kS1+lSlaTyMBG2QLQ9zE1QOzb5ULVJ+YekCDOwAbbq9qLMOYNs0nVWw35wA8JIRlRaw7hzvzrjeVIOTd7fZt8jIm0TKAPTb/yIZ6f3vore0Ag1hWYuCL1GUMZbzLF4vNp7SXRrWRaGPwIheb4qBWXMImD8NOneL+tzy+HI/LQIZMsB2XInu5fp2sJtI+N84qjndC6yFxcCdf1BDfuDcucXjuKaIingynkELgEHaVHa0aK2VC7YofGhKYoyXQeqmufsvJb1uHZjD0794y3gFkQcMZ+kHW38h0uBOAvOEcfIOroxUGqEFkW1T24Cmyclu+KbAnJj89fAX126pq4/Alv9AAAAAElFTkSuQmCC"
    },
    1271: function(e, t, n) {},
    1272: function(e, t, n) {},
    1273: function(e, t, n) {},
    1274: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAYAAAD7PHgWAAAB8UlEQVRYR+2YSy8DURTH/2fQEUR0USES8YxgSaLWQkJig0gQr5WFV6I+hQUra4+1nQVfQFKJLRsitCTFwiOKCnPlVGfTDi1z53YizmJmMveeOb/5n/vIPYSECSE8APoB9ACoAaCbbYruUQDnAHYBbBHRK8clvgghSgGsAGhQBJMuzAmAOSK6poRyGwDq03kpbj8GMM6AQwACioNnGm6ZATcBNGXqobjfEQPuZWFCZPqfMQY8yLR3Nvr9A9pV/e8rOLP0XLs4mh+uKv9c+WWbbQXbJ6MtebkwBjryIlN9nojugZAJKQXQBPJ5KTY7qIc7/Tn3siClAppQrY3aXUBS2h0BZFBZaXcMUFbalQDODOrhrl+OS8cAXZ3iFp4kI/pFdYUWszubpSro2mVGVjqt1LatoOu3OrtjLJ2/bQXTBbDb/g8oQ0HXH5pcf+wcBrCQnIroiyi8exC+dwO5dtP0nX+OhreSYropzCeuzSRb/ODORaOU0sfltVHlNJxJw5AVpdpZEt1n6YNfWhWPQhGjzknlkr9dWaZxwcg0fp4noqs4YAKSlRwA0M3lt1DEaFYMeAjgFMBOSvnNCsQ//ritEjC4UdRruRd/BeF6wLaJx00S8KpQURBu99eLxn6m4ORTmxDGtNOQDEekrQbXCvatAD8AtxIKXnml4ycAAAAASUVORK5CYII="
    },
    1275: function(e, t, n) {},
    1276: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA4RJREFUWEfdmGtIk1EYx//n3aZuvgPLMpW0wqAPJUWJmXQz6QZZYdBFiRwqCCIqFaFS9KHLp0gjiKKbGdqdgkIwjSCKjKKLEUhWiuAwEqx2cdPtiVO+9ibqdt5tfuh82nae//P89j/Pe3jPYfAxiMgEoA7ADAAWxthHX5pA5pkvMRGtB3B0OO42Y+y4L00g82MCEdFCAPrhxOkA9gx/fg7gkoaCnYyxviV5tmTmIVL0L+vM70fn+geIiFYAKAUwW0PRiSQuADcBnEvNsy+TGBUyYpFcQEAb3KhpbZB7+fcRICKqBJAdZJDR6awA8lNzv8s6g75GmSTA5vRGFryrY/bfQES0CsCJEMMo6VsYYwfSdv8ohCRtHoFiaGm9LFcrQKcA8F6ZjMF7KCPN4lzAyFv11yX63FprLlWAGgFMF6Hpt0G39+RAUmePx1S919iePFdyCuiLUyx2h4FwTK15XitnKUDNAKIEEqKmwRV/rWkojmtMEfC0nIl8I6CvSrHYe4ICxJ0pOuacl52h733d7jE/fuWJToyVnNePGz9MOpAC02X1Gnnx8pywTus3b/ierPDeKBmeSQUaDcOLa3BGYQ5sycaDOVtlbBd0JnCgEMBwKG0OhQhGO9DTt0Pmg2dcSU4XdErPBLBM6p4Xd6jxmSeq9r47vmSHoZtDTZ8iuYMEo82hitMDs/keMytOcnKo+Ul6h8YGHms3EHOI987GEvui1Ut0fSsXG/o3puv6BfYYf0LFgXhWfx1p6/Aafzr+9NlYY2YMcyfGMrdqTgzIn7+oxBy56Ep48GQoxpfmUGHEJ5XToQPKKnckf+unMF9AO9fpraW7wnuG40IHxJ/GW81ufiIZd5iMGNq/O6JbtWyhA/LlzDjz/ykQ3w7uPHJH2yZ4osZyRDbBk70mrE/11AbHIfVbouhSFWw1dOdvCfsa1Ka+cM8dc/7uYIIoDI8PCRBPfOPhYDR/SxSBipsmubavNfRNysYoAiYC1ARgqsbkWmSVKRa7daJTBz93z9GSWaOmKMVid00EVAFgm8bkorIBAJmpefblOqBMEfNLh9ZauVI5KCYBuC6aWWP8VcZY9dI8WxkjZCo5vISGF1fkevXtxyYAhzUW8Vf2mDG2j98TqZfLS/RlgOSKkduPEduI+NG4GMAGfyv4GdcB4Gxq7vcuZtAvlYAcruMgElGbA+Z6DsN/+wVFOk1DexizhAAAAABJRU5ErkJggg=="
    },
    1277: function(e, t, n) {},
    1278: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAoCAYAAACWwljjAAABmElEQVRYR+2Yv0oDQRDGv28FMQoipLNTEckLxHRaWOkD2MUgeQlTBLHRhwhpfQGxUxBsrVOosbPSwpxBveitbJLDgLe5f7lclL3yZmfmt9/MHrdDAJBSLgOoANgAMKfeJfC0AVwBOCF5p4vPPswZgIUEILxCvgDYIdn0MiqgGoDtMcG4ac5JlnVAtwmWSbfPNslVHdDjmNXppiO5aICGKe8qtL73ekCI+479eXlzOv+kmjrVkhVK1mEPnG+O49QmCAiAg8ZEATmQthZo/+g923j4mg5zAnNLU3a9OvMcxMftoZ+S9Qun66FoQMKuVzPJAAXZZZw1oRWKkyyIrwHyU8koNHKFoh178x3yK0Rwu2lqP62MQkYhPwX87KaH/pVCaVylLZJrSkWvf+pUhw1eQGo2lNo45heQkm1gYLUJYNavISPaLQDXAI4HB1aeQBETjMTt7wLlS62KAEPdXONKJqX8oC5IoWjtQiAXN0kofzVs0Dnki62sgChDyEyooJEX98cxw/x7UNxyhFxJqnzdMkk2Ox15oQZW38kZJUu3MN4PAAAAAElFTkSuQmCC"
    },
    1279: function(e, t, n) {},
    1280: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB50lEQVRIS72WQU8TURSFz5lak7JCYoj/gB3uTDRWMa5M2PkXQEgXaonQBU0pbV2ASeuqFOQ3sCJhgynYJiTuXPILMIaAKxsY22PewEAttFMyzMxu8u4737tz75tzCY/nw0J5NBLBawlxkiMAhs+3/JK0T6Jm2383ivm3P3pJsdtiqlB5hmbrI8inXodx1qU6Itb8Unr623XxV0DJZDEWvTfwGdAkga4HuU5MgCzwy8nxn/el0kyjPeY/oWS2OBS1YpsEHveVRZcgAXt2qzFeys4cuSEXIJPJ3cHYNognfiDuXgd23HjpZnYBmsuVVwm+uQ3IJUxry5nElHl3QLO58nOC1ZvWxOtQpma0OGYaxAGlFsu1vrvLS71zXaovLSTiPLsn7HkHbqrdGd9s6iFTuUoeUNqvWK/9EvJM5VaqAMaCBAGqGtABgAfBgnBgQDaAO0GCBDRDAQE4CeXTSfoZUjNgh3OLKwUS84HWyLR3aBc2tF9Q0D9VQS8+ZRK7bTZRWSV0yzbBteXM9KVNmKzOLDz21a+7ehqfA8uuD0Vpb5F45KcLJXy3FX1Vyk5ctXJX2O9wQmH99HfjXc/hpD0L47qWUOjbEKV6i0ibwvc1bnUGuQMkgDiAEYD3z2MOAe0DVs22Tz0HyH+u+85CO6dgrAAAAABJRU5ErkJggg=="
    },
    1281: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB+ElEQVRIS72WzU8TYRDGn2drTeoJiDH+B9z0ZqKhivFk4s2bZxHSg1oCNJGmlLaagEnrqZSPs0dOJl40VdvExJtH/gKMIcDJBtb2Me/CQu3XLpTu3jbvzPxmdubdZwiPZ2aheCMUwmMJUZKjAK4du/yWtEWiYtt/N/PZ5z97hWK3w0SudBf1xmuQY17JOOdSFSFrfik59a2TfRsoHs9HwsNX3gGaINA1kU7BBMgC1w/2/rwsFKZrzTb/BYqn8yNhK/KBwG1fVXQxEvDdbtQeFdLTu67JCchUcnko8gnEnX4grq8D26s9cCs7Ac1liqsEn10E5BSmteVUbNK8O6DZTPEewfJZe+KVlOkZLY6bAXFAicVixfd0eUVvPZeqSwuxKI/uCXvegbPGbrWv13WTiUwpCyjZb7Be/hKyTGRWygDGBwkCVDagbQDXBwvCtgHZAC61gt6vvzkX+8nEqzY/AfVAQAAOAvl0kn4FNAz4wrnFlRyJ+XM1xKeTM96BXdjAfkGD/qkKuv82FfvaJBOlVUIXLBNcW05NncqEqepIwiOf+1VXT+FzYOmNkTDtjyRu+RyojmYSftgKPyykn7ZLuevR73JCYeNwv/ai53LSnJ5RXUvI+RZEqdogkqbxncr0XKfcBRJAFMAowKvHgXYAbQFWxbYPPRfIf8Tr1EJ3ixnxAAAAAElFTkSuQmCC"
    },
    1282: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAB/0lEQVRIS72Wz08TURDHP7O1JvWExBj/A254M5FYxXgy8ebNM7/SA1oiNJGmlLaagEnrqZQfZ46cTLxIqtbExJtH/gIMMeLJBtZ2zFu6UGXbXSjdvW3evPnMvJn3viP4fM8XysORCI9ViYvIEHC9tWVPVXdEqNn2n61ifvpbN1fSaTFVqNyl0XyJyB2/YJx11c9ErPml9NQnL/tToGSyGItevfIGdFygYyBezhTUQtYP9n8/K5Vm6u02/zhKZouDUSv2VuB2oCw6GCl8sZv1R6XszE/X5BhkMrk8EHuPMNILxN3rwPbrD9zMjkFzufKqIBMXATmB6dpyJjFp/h3QbK58T5BqkJpsrr9y/DwZf+Ebk6mZWDJqGsQBpRbLtaDddRaQ241LC4m4HN0T6XoH2kM/MwhoNPSmpHKVPGja9xxaBucBqZKXVG6lCoz2EwRaNaBd4EZ/QewakA1c+h/kHlHQAFw7r25UaIQCAg5COTpV/R5SM/BB5hZXCiLMB63Fuds7tAsb2hPU70dV0fuvM4mPbTJRWRX0gmVC1pYzUycyYbI6kvDYdq/q6it8Diy7MRgV+50It4J2oefsoHy1NfqwlB07LeXuhl6HE1E2Dn/Vn3YdTtqjM6prKYWggmjGraaQNoX3ytJ3nHIHSCAODIFcazn6AboDVs22D30HyL+oy/hCt5ljYwAAAABJRU5ErkJggg=="
    },
    1283: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAYAAAD+pA/bAAABRklEQVQ4T62UsU6DUBSG/x/t2EFQqJomfQgX40BMtEMdfB7joC48j5Mm7UIcOvkQLoqViqkaa2rlmEuA1LaABs7G5eT//nPuOZeDoRyAuAJQQ5VBTBDiiEpz8CxnAM6r1Fd6lsGLCKDicSguCbsKiAjcxjr3lVYK8H2phxruAdRLQl75jW3T5PsvgPrwfLE1DW4ZADXY5hpvEo20guSg5H1EfZ81uAAQkdWnIJqqw39VIuiZBjokp7kA9dP3ZVM03Aqw9UfIwzjETmuD3nz+QgVJghdIZwW4FMnfDxJfAI5NndfLzGQC4tF1SJzkVUHCMXWeZuXkAuIl7APYzRDoWwb3cg0U9Xg0Ev1zirsl+/E2+UCr2WRQChBXoSaqOyfUtgz2igwWtmjmKUnvQwinkdP3wjFd5kpEav4LumEIWAbaJNX0FMYPEzZnKCm/AU0AAAAASUVORK5CYII="
    },
    1284: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAYCAYAAAAlBadpAAABEUlEQVQ4T73UMU7DMBQG4P8vHdiqxrXdSvQ2rOkCFyDXYAlDuvQ+IBEkytKTsEQCliCGtLKRUYNQRds8I5HNkb7flt/zY/Xiz+2ID4j4WL36BkBhFW+kPmAfkPdYnnjMtGbdNeQbb0Hd6yHVQz51CdjFrclNgoLk5lDIPhxM2Qcypfi8L+AQDqZyRDZJePtbwDEMEmsAC5PwejfgKP4BVqd9pIMB39p/EhxMKOOlVbwPCyn+2pTEXA+RR+FtwPL/sSfmNuLY4cIurGIpvbBV84F0OhWUKjSJc1iMR/ImqUhcmYR3svb0KNdEdiZ9GA7IxxFPsnYO6UQLhwGJR2wwM4bvXaZIW6oGDoXVMQPwD6P3E9DclUnRaEGfAAAAAElFTkSuQmCC"
    },
    1328: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(683)
          , o = n(84)
          , r = n.n(o)
          , i = n(123)
          , s = n(67)
          , l = n(70)
          , c = n(69)
          , u = n(68)
          , d = n(71)
          , p = n(0)
          , f = n.n(p)
          , h = n(175)
          , m = n(122)
          , v = n(1323)
          , y = (n(1271),
        n(891))
          , b = n.n(y)
          , g = n(892)
          , k = n.n(g)
          , S = (n(599),
        n(859),
        n(1272),
        n(1273),
        n(1274))
          , E = n.n(S)
          , A = function(e) {
            function t() {
                var e, n;
                Object(s.a)(this, t);
                for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                    o[r] = arguments[r];
                return (n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).state = {},
                n
            }
            return Object(d.a)(t, e),
            Object(u.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: this.props.item.select && window.isVideo ? "videoItem videoItem-sel" : "videoItem",
                        onClick: function() {
                            e.handleClickVideo()
                        }
                    }, f.a.createElement("div", {
                        className: "videoItem-line"
                    }), f.a.createElement("img", {
                        className: "videoItem-icon",
                        src: E.a
                    }), f.a.createElement("div", {
                        className: this.props.item.select && window.isVideo ? "videoItem-textContent-sel" : "videoItem-textContent-nor"
                    }, f.a.createElement("div", {
                        className: "videoItem-textContent-title"
                    }, this.props.item.title), f.a.createElement("div", {
                        className: "videoItem-textContent-time"
                    }, !this.props.item.select && this.props.item.lastStudyDate ? "\u4e0a\u6b21\u89c2\u770b\u65f6\u95f4" + this.props.item.lastStudyDate : "")))
                }
            }, {
                key: "handleClickVideo",
                value: function() {
                    this.props.clickSectionVideo ? this.props.clickSectionVideo(this.props.chapterIndex, this.props.sectionIndex, this.props.videoIndex, this.props.item) : this.props.clickChapterVideo && this.props.clickChapterVideo(this.props.chapterIndex, this.props.videoIndex, this.props.item)
                }
            }]),
            t
        }(p.Component)
          , w = n(575)
          , C = n(576)
          , O = n(578)
          , T = n(579)
          , P = n(577)
          , I = (n(1275),
        n(1276))
          , N = n.n(I);
        function x(e) {
            return function() {
                var t, n = Object(P.a)(e);
                if (function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var a = Object(P.a)(this).constructor;
                    t = Reflect.construct(n, arguments, a)
                } else
                    t = n.apply(this, arguments);
                return Object(T.a)(this, t)
            }
        }
        var M = function(e) {
            Object(O.a)(n, e);
            var t = x(n);
            function n() {
                var e;
                Object(w.a)(this, n);
                for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                    o[r] = arguments[r];
                return (e = t.call.apply(t, [this].concat(o))).state = {},
                e
            }
            return Object(C.a)(n, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: "taskItem",
                        onClick: function() {
                            e.handleClickTask()
                        }
                    }, f.a.createElement("div", {
                        className: "taskItem-line"
                    }), f.a.createElement("img", {
                        className: "taskItem-icon",
                        src: N.a
                    }), f.a.createElement("div", {
                        className: "taskItem-textContent-nor clearfix"
                    }, f.a.createElement("div", {
                        className: "taskItem-textContent-title fl"
                    }, this.props.item.taskName), f.a.createElement("div", {
                        className: ["fl", "tag", "tc", 1 === this.props.item.type ? "practice" : "online"].join(" ")
                    }, 1 === this.props.item.type ? "\u5b9e\u8df5\u6d4b\u8bc4" : "\u5728\u7ebf\u6d4b\u8bd5")))
                }
            }, {
                key: "handleClickTask",
                value: function() {
                    this.props.clickSectionTask ? this.props.clickSectionTask(this.props.chapterIndex, this.props.sectionIndex, this.props.taskIndex, this.props.item) : this.props.clickChapterTask && this.props.clickChapterTask(this.props.chapterIndex, this.props.taskIndex, this.props.item)
                }
            }]),
            n
        }(p.Component)
          , D = (n(1277),
        n(1025))
          , j = n.n(D)
          , R = n(1026)
          , L = n.n(R)
          , V = n(1027)
          , F = n.n(V)
          , B = n(1028)
          , U = n.n(B)
          , K = n(1029)
          , Q = n.n(K)
          , z = n(1030)
          , G = n.n(z)
          , J = n(1278)
          , H = n.n(J)
          , _ = function(e) {
            function t(e) {
                var n;
                return Object(s.a)(this, t),
                (n = Object(l.a)(this, Object(c.a)(t).call(this, e))).state = {},
                n.state = {
                    list: ["1", "2"]
                },
                n
            }
            return Object(d.a)(t, e),
            Object(u.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: "videoFile"
                    }, f.a.createElement("div", {
                        className: "videoFile-titleContent"
                    }, f.a.createElement("div", {
                        className: "titleContent-line"
                    }), f.a.createElement("img", {
                        className: "titleContent-icon",
                        src: H.a
                    }), f.a.createElement("div", {
                        className: "titleContent-title"
                    }, " ", this.props.materialItem.title)), f.a.createElement("div", {
                        className: "videoFile-fileContent-nor"
                    }, this.props.materialItem.fileList.map(function(t, n) {
                        return f.a.createElement("div", {
                            className: t.select && !window.isVideo ? "videoFile-listContent videoFile-listContent-sel" : "videoFile-listContent videoFile-listContent-nor",
                            key: n + t.name,
                            onClick: function() {
                                e.onClickFile(n)
                            }
                        }, f.a.createElement("img", {
                            className: "videoFile-icon1",
                            src: e.getFileIcon(t.name)
                        }), f.a.createElement("p", {
                            className: "videoFile-title"
                        }, f.a.createElement("span", {
                            className: t.select && !window.isVideo ? "videoFile-title-filename-sel" : "videoFile-title-filename-nor"
                        }, t.name), " ", f.a.createElement("span", {
                            className: t.select && !window.isVideo ? "videoFile-title-sizename-sel" : "videoFile-title-sizename-nor"
                        }, e.handleFileSize(t.fileSize))), 1 == t.downloadStatus && f.a.createElement("img", {
                            className: "videoFile-icon2",
                            src: G.a,
                            onClick: function() {
                                e.onClickDownload(t)
                            }
                        }))
                    })))
                }
            }, {
                key: "onClickFile",
                value: function(e) {
                    this.props.handleClickFile(this.props.materialIndex, e)
                }
            }, {
                key: "handleFileSize",
                value: function(e) {
                    return (e / 1024 / 1024).toFixed(2) + "M"
                }
            }, {
                key: "onClickDownload",
                value: function(e) {
                    this.api_getFileDetail(e.id)
                }
            }, {
                key: "api_getFileDetail",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t) {
                        var n, a, o;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.a.axiosData("post", "/yunkai/web/charterSection/getFileInfo", {
                                        id: t
                                    });
                                case 2:
                                    "REQ001" === (n = e.sent).code && n.data ? (a = n.data.fileUrl,
                                    o = h.a.decodeAes(a),
                                    this.downloadFile(o, n.data.name)) : m.a.error(n.msg);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "downloadFile",
                value: function(e, t) {
                    if (e) {
                        var n = document.createElement("a");
                        n.style.display = "none",
                        n.href = e + "?attname=" + t,
                        n.target = "_blank",
                        n.setAttribute("download", t),
                        document.body.appendChild(n),
                        n.click(),
                        document.body.removeChild(n)
                    }
                }
            }, {
                key: "getFileIcon",
                value: function(e) {
                    return e.indexOf(".word") > -1 ? Q.a : e.indexOf(".ppt") > -1 ? L.a : e.indexOf(".png") > -1 ? F.a : e.indexOf(".jpg") > -1 ? F.a : e.indexOf(".jpeg") > -1 ? F.a : e.indexOf(".xls") > -1 ? U.a : (e.indexOf(".pdf"),
                    j.a)
                }
            }]),
            t
        }(p.Component)
          , Y = (n(1279),
        n(1280))
          , W = n.n(Y)
          , Z = n(1281)
          , X = n.n(Z)
          , q = n(1282)
          , $ = n.n(q)
          , ee = (n(873),
        function(e) {
            function t() {
                var e, n;
                Object(s.a)(this, t);
                for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                    o[r] = arguments[r];
                return (n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).state = {},
                n
            }
            return Object(d.a)(t, e),
            Object(u.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: "videoSection"
                    }, f.a.createElement("div", {
                        className: "videoSection-titleContent",
                        onClick: function() {
                            e.clickSectionTitle(e.props.item, e.props.chapterIndex, e.props.sectionIndex)
                        }
                    }, f.a.createElement("div", {
                        className: "videoSection-title"
                    }, f.a.createElement("div", {
                        className: "ttitleText"
                    }, this.props.item.name)), f.a.createElement("img", {
                        className: "videoSection-point",
                        src: this.getSectionTitleIcon(this.props.item)
                    })), f.a.createElement("div", null, this.props.item.isShow && f.a.createElement("div", null, f.a.createElement("div", {
                        className: "videoSection-videoContent"
                    }, this.props.item.videoList.map(function(t, n) {
                        return f.a.createElement(A, {
                            key: n + t.title,
                            item: t,
                            chapterIndex: e.props.chapterIndex,
                            sectionIndex: e.props.sectionIndex,
                            videoIndex: n,
                            clickSectionVideo: e.onClickSectionVideo.bind(e)
                        })
                    })), f.a.createElement("div", null, this.props.item.materialList.map(function(t, n) {
                        return f.a.createElement(_, {
                            key: n + t.title,
                            materialItem: t,
                            materialIndex: n,
                            handleClickFile: e.clickFile.bind(e)
                        })
                    })), f.a.createElement("div", {
                        className: "videoSection-videoContent"
                    }, this.props.item.taskList.map(function(t, n) {
                        return f.a.createElement(M, {
                            className: "videoList",
                            key: n + t.taskName,
                            item: t,
                            chapterIndex: e.props.chapterIndex,
                            sectionIndex: e.props.sectionIndex,
                            taskIndex: n,
                            clickSectionTask: e.onClickSectionTask.bind(e)
                        })
                    })))))
                }
            }, {
                key: "onClickSectionVideo",
                value: function(e, t, n, a) {
                    this.props.clickSectionVideo && this.props.clickSectionVideo(e, t, n, a)
                }
            }, {
                key: "onClickSectionTask",
                value: function(e, t, n, a) {
                    this.props.clickSectionTask && this.props.clickSectionTask(e, t, n, a)
                }
            }, {
                key: "clickFile",
                value: function(e, t) {
                    this.props.clickSectionFile && this.props.clickSectionFile(this.props.chapterIndex, this.props.sectionIndex, e, t)
                }
            }, {
                key: "getSectionTitleIcon",
                value: function(e) {
                    return e.materialList.length <= 0 && e.videoList.length <= 0 && e.taskList.length <= 0 ? W.a : e.isShow ? X.a : $.a
                }
            }, {
                key: "clickSectionTitle",
                value: function(e, t, n) {
                    (e.materialList.length > 0 || e.videoList.length > 0 || e.taskList.length > 0) && this.props.handleClickSectionTitle && this.props.handleClickSectionTitle(t, n)
                }
            }]),
            t
        }(p.Component))
          , te = n(1283)
          , ne = n.n(te)
          , ae = n(1284)
          , oe = n.n(ae)
          , re = function(e) {
            function t() {
                var e, n;
                Object(s.a)(this, t);
                for (var a = arguments.length, o = new Array(a), r = 0; r < a; r++)
                    o[r] = arguments[r];
                return (n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(o)))).state = {
                    chapterList: []
                },
                n
            }
            return Object(d.a)(t, e),
            Object(u.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: "videoChapter"
                    }, f.a.createElement("div", {
                        className: "videoChapter-titleContent",
                        onClick: function() {
                            e.onClickChapterTitle()
                        }
                    }, f.a.createElement("img", {
                        className: this.props.item.isShow ? "titleContent-stateIcon-sel" : "titleContent-stateIcon-nor",
                        src: this.props.item.isShow ? ne.a : oe.a
                    }), f.a.createElement("div", {
                        className: "videoChapter-titleContent-title"
                    }, " ", this.props.item.name)), f.a.createElement("div", null, this.props.item.isShow && f.a.createElement("div", null, f.a.createElement("div", {
                        className: "videoChapter-videoList"
                    }, this.props.item.videoList.map(function(t, n) {
                        return f.a.createElement(A, {
                            className: "videoList",
                            key: n + t.title,
                            item: t,
                            chapterIndex: e.props.chapterIndex,
                            videoIndex: n,
                            clickChapterVideo: e.onClickChapterVideo.bind(e)
                        })
                    })), f.a.createElement("div", {
                        className: "videoChapter-fileContent"
                    }, this.props.item.materialList.map(function(t, n) {
                        return f.a.createElement(_, {
                            key: n + t.title,
                            materialIndex: n,
                            materialItem: t,
                            handleClickFile: e.clickFile.bind(e)
                        })
                    })), f.a.createElement("div", {
                        className: "videoChapter-videoList"
                    }, this.props.item.taskList.map(function(t, n) {
                        return f.a.createElement(M, {
                            className: "videoList",
                            key: n + t.taskName,
                            item: t,
                            chapterIndex: e.props.chapterIndex,
                            taskIndex: n,
                            clickChapterTask: e.onClickChapterTask.bind(e)
                        })
                    })), f.a.createElement("div", {
                        className: "videoSection-content"
                    }, this.props.item.sectionList.map(function(t, n) {
                        return f.a.createElement(ee, {
                            key: n + t.name,
                            chapterIndex: e.props.chapterIndex,
                            sectionIndex: n,
                            item: t,
                            clickSectionVideo: e.onClickSectionVidel.bind(e),
                            clickSectionTask: e.onClickSectionTask.bind(e),
                            clickSectionFile: e.onClickSectionFile.bind(e),
                            handleClickSectionTitle: e.handleClickSectionTitle.bind(e)
                        })
                    })))))
                }
            }, {
                key: "clickFile",
                value: function(e, t) {
                    this.props.clickFile(this.props.chapterIndex, -1, e, t, -1, -1)
                }
            }, {
                key: "onClickChapterVideo",
                value: function(e, t, n) {
                    this.props.clickVideo && this.props.clickVideo(e, t, -1, -1, n)
                }
            }, {
                key: "onClickChapterTask",
                value: function(e, t, n) {
                    this.props.clickTask && this.props.clickTask(e, t, -1, -1, n)
                }
            }, {
                key: "onClickSectionVidel",
                value: function(e, t, n, a) {
                    this.props.clickVideo && this.props.clickVideo(e, -1, t, n, a)
                }
            }, {
                key: "onClickSectionTask",
                value: function(e, t, n, a) {
                    this.props.clickTask && this.props.clickTask(e, -1, t, n, a)
                }
            }, {
                key: "onClickSectionFile",
                value: function(e, t, n, a) {
                    this.props.clickFile && this.props.clickFile(e, t, -1, -1, n, a)
                }
            }, {
                key: "onClickChapterTitle",
                value: function() {
                    this.props.clickChapter && this.props.clickChapter(this.props.chapterIndex)
                }
            }, {
                key: "handleClickSectionTitle",
                value: function(e, t) {
                    this.props.clickSectionTitle && this.props.clickSectionTitle(e, t)
                }
            }]),
            t
        }(p.Component)
          , ie = n(893)
          , se = n(99)
          , le = n.n(se)
          , ce = (n(998),
        n(999))
          , ue = 0
          , de = ""
          , pe = ""
          , fe = ""
          , he = ""
          , me = 10
          , ve = function(e) {
            function t(e) {
                var n;
                return Object(s.a)(this, t),
                (n = Object(l.a)(this, Object(c.a)(t).call(this, e))).state = {},
                n.state = {
                    playerUrl: "",
                    fileUrl: "",
                    courseName: "",
                    chapterSectionList: [],
                    checkVideoTimer: null,
                    heartTimer: null,
                    readFileTimer: null,
                    isFullScreen: !0,
                    isVideo: !0,
                    searchData: {},
                    isBelongChapter: !0,
                    chapterIndex: -1,
                    sectionIndex: -1,
                    videoIndex: -1,
                    currentSeek: 0,
                    networkState: !0,
                    networkTimeId: null,
                    failVideo: [],
                    failTotalTime: 0,
                    once: !0,
                    videoTime: 10
                },
                n
            }
            return Object(d.a)(t, e),
            Object(u.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e() {
                        var t, n, a, o, s, l, c, u, d, p = this;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return window.pageHistory = this.props.history,
                                    window.playVideoReload && (window.playVideoReload = !1,
                                    window.localStorage.setItem("hasRedirectVideo", !0),
                                    window.location.reload()),
                                    e.next = 5,
                                    this.api_getConfig();
                                case 5:
                                    if (t = window.localStorage.getItem("courseVideoItemSearchData") || "{}",
                                    (t = JSON.parse(t)).courseDetail = JSON.parse(window.localStorage.getItem("coursePageSearchData") || "{}").courseDetail,
                                    n = t.isVideo,
                                    window.isVideo = n,
                                    a = "",
                                    !n) {
                                        e.next = 20;
                                        break
                                    }
                                    if (t = this.handleList(t),
                                    this.setCurrentIndex(t),
                                    1 !== t.platform) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 17,
                                    this.api_getVideoDetail(de);
                                case 17:
                                    a = e.sent;
                                case 18:
                                    e.next = 25;
                                    break;
                                case 20:
                                    return t = this.handleFileList(t),
                                    e.next = 23,
                                    this.api_getFileDetail(he);
                                case 23:
                                    a = e.sent,
                                    this.api_readFile(he);
                                case 25:
                                    o = this.transChapterState(t.chapterSectionList),
                                    window.isVideo = n,
                                    this.setState({
                                        courseName: t.courseName,
                                        chapterSectionList: o,
                                        playerUrl: a,
                                        fileUrl: a,
                                        isVideo: n,
                                        searchData: t
                                    }),
                                    1 === t.platform && this.player.seek(this.state.currentSeek),
                                    1 === t.platform && this.api_getConfig(),
                                    s = window.localStorage.getItem("failVideo") || "[]",
                                    this.setState({
                                        failVideo: JSON.parse(s)
                                    }),
                                    l = 0,
                                    {},
                                    JSON.parse(s).forEach(function() {
                                        var e = Object(i.a)(r.a.mark(function e(t, n) {
                                            var a, o;
                                            return r.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        if (de !== t.videoId) {
                                                            e.next = 9;
                                                            break
                                                        }
                                                        return a = p.player.getState(),
                                                        o = a.player,
                                                        l = n,
                                                        e.next = 7,
                                                        h.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                                            charterSectionId: ue,
                                                            videoId: de,
                                                            videoType: 1,
                                                            studyTime: t.time,
                                                            uploadType: 2,
                                                            localCreateTime: (new Date).getTime(),
                                                            appType: 3,
                                                            lastStudyTime: parseInt(o.currentTime)
                                                        }, !1);
                                                    case 7:
                                                        "REQ001" === e.sent.code && window.localStorage.setItem("failVideo", JSON.stringify(p.state.failVideo.splice(l, 1)));
                                                    case 9:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }()),
                                    c = !1,
                                    d = "",
                                    document.addEventListener("visibilitychange", function() {
                                        var e = p.player.getState().player;
                                        if ("visible" === document.visibilityState) {
                                            d = (new Date).getTime();
                                            var t = Math.ceil((d - u) / 1e3);
                                            c && h.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                                charterSectionId: ue,
                                                videoId: de,
                                                videoType: 1,
                                                studyTime: t,
                                                uploadType: 2,
                                                localCreateTime: (new Date).getTime(),
                                                appType: 3,
                                                lastStudyTime: parseInt(e.currentTime)
                                            }, !1),
                                            p.startTimer(p.state.videoTime)
                                        } else
                                            c = !1 === e.paused && !1 === e.ended,
                                            u = (new Date).getTime(),
                                            p.stopTimer()
                                    });
                                case 39:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("visibilitychange", function() {}),
                    this.stopTimer(),
                    clearTimeout(this.state.readFileTimer),
                    window.localStorage.getItem("hasRedirectVideo") && window.localStorage.removeItem("hasRedirectVideo"),
                    1 === this.state.searchData.platform && this.api_uploadStudy(),
                    this.state.networkTimeId && (clearTimeout(this.state.networkTimeId),
                    this.state.networkTimeId = null)
                }
            }]),
            Object(u.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return f.a.createElement("div", {
                        className: "studyVideo"
                    }, f.a.createElement("div", {
                        className: "studyVideo-content"
                    }, this.state.isVideo && 2 === this.state.searchData.platform && f.a.createElement("div", {
                        className: this.state.isFullScreen ? "studyVideo-rightContent-full" : "studyVideo-rightContent-normal"
                    }, f.a.createElement("div", {
                        className: "study-navigation"
                    }, f.a.createElement("div", {
                        className: "navigation-button",
                        onClick: function() {
                            e.clickBack()
                        }
                    }, f.a.createElement("img", {
                        className: "navigation-button-icon",
                        src: b.a
                    }), f.a.createElement("div", {
                        className: "navigation-button-text"
                    }, "\u8fd4\u56de\u8bfe\u7a0b")), f.a.createElement("div", {
                        className: "video-title"
                    }, this.state.searchData.title), this.state.isFullScreen ? f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickShowList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-open"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-open-text"
                    }, "\u8bfe\u7a0b\u76ee\u5f55"))) : f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickHideList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-close"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-close-text"
                    }, "1")))), f.a.createElement(ie.a, Object.assign({
                        channelId: this.state.searchData.channelId,
                        sectionInfo: this.state.searchData
                    }, this.state.searchData))), this.state.isVideo && 1 === this.state.searchData.platform && f.a.createElement("div", {
                        className: this.state.isFullScreen ? "studyVideo-rightContent-full" : "studyVideo-rightContent-normal"
                    }, f.a.createElement("div", {
                        className: "study-navigation"
                    }, f.a.createElement("div", {
                        className: "navigation-button",
                        onClick: function() {
                            e.clickBack()
                        }
                    }, f.a.createElement("img", {
                        className: "navigation-button-icon",
                        src: b.a
                    }), f.a.createElement("div", {
                        className: "navigation-button-text"
                    }, "\u8fd4\u56de\u8bfe\u7a0b")), f.a.createElement("div", {
                        className: "video-title"
                    }, pe), this.state.isFullScreen ? f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickShowList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-open"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-open-text"
                    }, "\u8bfe\u7a0b\u76ee\u5f55"))) : f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickHideList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-close"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-close-text"
                    }, "1")))), this.state.playerUrl && f.a.createElement(ce.Player, {
                        ref: function(t) {
                            e.player = t
                        },
                        autoPlay: !0,
                        playsInline: !0
                    }, f.a.createElement("source", {
                        src: this.state.playerUrl,
                        type: "video/mp4"
                    }), f.a.createElement(ce.ControlBar, null))), !this.state.isVideo && f.a.createElement("div", {
                        className: this.state.isFullScreen ? "studyVideo-rightContent-full" : "studyVideo-rightContent-normal"
                    }, f.a.createElement("div", {
                        className: "study-navigation"
                    }, f.a.createElement("div", {
                        className: "navigation-button",
                        onClick: function() {
                            e.clickBack()
                        }
                    }, f.a.createElement("img", {
                        className: "navigation-button-icon",
                        src: b.a
                    }), f.a.createElement("div", {
                        className: "navigation-button-text"
                    }, "\u8fd4\u56de\u8bfe\u7a0b")), f.a.createElement("div", {
                        className: "video-title"
                    }, fe), this.state.isFullScreen ? f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickShowList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-open"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-open-text"
                    }, "\u8bfe\u7a0b\u76ee\u5f55"))) : f.a.createElement("div", {
                        className: "leftContent-top",
                        onClick: function() {
                            e.onClickHideList()
                        }
                    }, f.a.createElement("p", {
                        className: "p-down-close"
                    }, f.a.createElement("img", {
                        src: k.a
                    }), f.a.createElement("span", {
                        className: "p-down-close-text"
                    }, "1")))), this.state.fileUrl && f.a.createElement("iframe", {
                        className: "studyVideo-rightContent-fileContent",
                        src: this.filterExt(this.state.fileUrl) ? this.state.fileUrl : "https://view.officeapps.live.com/op/view.aspx?src=" + encodeURIComponent(this.state.fileUrl)
                    })), 0 == this.state.isFullScreen && f.a.createElement("div", {
                        className: "studyVideo-leftContent"
                    }, f.a.createElement("div", {
                        className: "title-box"
                    }, "\u8bfe\u7a0b\u76ee\u5f55"), f.a.createElement("div", {
                        className: "leftContent-content"
                    }, this.state.chapterSectionList.map(function(t, n) {
                        return f.a.createElement(re, {
                            key: n + t.name,
                            chapterIndex: n,
                            item: t,
                            clickVideo: e.onClickVideo.bind(e),
                            clickTask: e.onClickTask.bind(e),
                            clickFile: e.onClickFile.bind(e),
                            clickChapter: e.handleListState.bind(e),
                            clickSectionTitle: e.handleSectionTitle.bind(e)
                        })
                    })))))
                }
            }, {
                key: "handleSectionTitle",
                value: function(e, t) {
                    for (var n = this.state.chapterSectionList, a = 0; a < n.length; a++)
                        for (var o = 0; o < n[a].sectionList.length; o++) {
                            var r = n[a].sectionList[o];
                            a == e && o == t && (r.isShow = !r.isShow)
                        }
                    this.setState({
                        chapterSectionList: n
                    })
                }
            }, {
                key: "clickBack",
                value: function() {
                    this.props.history.replace({
                        pathname: "/coursePage"
                    })
                }
            }, {
                key: "onClickShowList",
                value: function() {
                    this.setState({
                        isFullScreen: !1
                    })
                }
            }, {
                key: "onClickHideList",
                value: function() {
                    this.setState({
                        isFullScreen: !0
                    })
                }
            }, {
                key: "onClickFile",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t, n, a, o, i, s) {
                        var l, c, u, d = this;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return window.trackEvent("Data", "\u5728\u64ad\u653e\u9875_\u8bfe\u7a0b\u76ee\u5f55-\u70b9\u51fb\u8d44\u6599"),
                                    l = {
                                        chapterSectionList: this.state.chapterSectionList,
                                        courseName: this.props.courseName,
                                        isBelongChapter: a >= 0,
                                        chapterIndex: t,
                                        sectionIndex: n,
                                        fileIndex: a >= 0 ? a : i,
                                        filerow: o >= 0 ? o : s
                                    },
                                    c = this.handleFileList(l),
                                    e.next = 5,
                                    this.api_getFileDetail(he);
                                case 5:
                                    u = e.sent,
                                    clearTimeout(this.state.readFileTimer),
                                    this.api_readFile(he),
                                    this.setState({
                                        fileUrl: ""
                                    }, function() {
                                        window.isVideo = !1,
                                        d.setState({
                                            chapterSectionList: c.chapterSectionList,
                                            fileUrl: u,
                                            isVideo: !1
                                        })
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t, n, a, o, r, i) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "filterExt",
                value: function(e) {
                    var t = !1;
                    return [".pdf", ".png", ".jpeg", ".jpg", ".PDF", ".PNG", ".JPEG", ".JPG"].map(function(n) {
                        e.indexOf(n) > -1 && (t = !0)
                    }),
                    t
                }
            }, {
                key: "onClickVideo",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t, n, o, i, s) {
                        var l, c, u, d, p;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (window.trackEvent("Video", "\u5728\u64ad\u653e\u9875_\u8bfe\u7a0b\u76ee\u5f55-\u70b9\u51fb\u89c6\u9891"),
                                    l = {
                                        chapterSectionList: this.state.chapterSectionList,
                                        isBelongChapter: this.state.isBelongChapter,
                                        chapterIndex: this.state.chapterIndex,
                                        sectionIndex: this.state.sectionIndex,
                                        videoIndex: this.state.videoIndex
                                    },
                                    c = this.setupVideoStatus(l),
                                    this.setState({
                                        chapterSectionList: c.chapterSectionList,
                                        isBelongChapter: n >= 0,
                                        chapterIndex: t,
                                        sectionIndex: o,
                                        videoIndex: n >= 0 ? n : i
                                    }),
                                    u = {
                                        chapterSectionList: this.state.chapterSectionList,
                                        courseName: this.props.courseName,
                                        isBelongChapter: n >= 0,
                                        chapterIndex: t,
                                        sectionIndex: o,
                                        videoIndex: n >= 0 ? n : i
                                    },
                                    d = this.handleList(u),
                                    this.setState({
                                        chapterSectionList: d.chapterSectionList,
                                        isVideo: !0,
                                        searchData: Object(a.a)({}, this.state.searchData, u, s)
                                    }),
                                    window.localStorage.setItem("courseVideoItemSearchData", JSON.stringify(Object(a.a)({}, this.state.searchData, u, s))),
                                    1 !== s.platform) {
                                        e.next = 29;
                                        break
                                    }
                                    return e.next = 22,
                                    this.api_getVideoDetail(de);
                                case 22:
                                    p = e.sent,
                                    window.isVideo = !0,
                                    this.setState({
                                        playerUrl: p
                                    }),
                                    this.player.load(),
                                    this.player.seek(this.state.currentSeek),
                                    e.next = 31;
                                    break;
                                case 29:
                                    window.localStorage.setItem("hasRedirectVideo", !0),
                                    window.location.reload();
                                case 31:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t, n, a, o, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "getCourseStatus",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t) {
                        var n;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = !1,
                                    e.next = 3,
                                    h.a.axiosData("post", "/yunkai/admin/student/task/checkCanAnswer", {
                                        taskId: t
                                    });
                                case 3:
                                    return "REQ001" === e.sent.code && (n = !0),
                                    e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "onClickTask",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t, n, a, o, i) {
                        var s, l;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (1 !== i.type) {
                                        e.next = 12;
                                        break
                                    }
                                    if (!(i.status < 1)) {
                                        e.next = 9;
                                        break
                                    }
                                    return window.trackEvent("Task", "\u5728\u64ad\u653e\u9875_\u8bfe\u7a0b\u76ee\u5f55-\u70b9\u51fb\u672a\u5b8c\u6210\u7684\u4f5c\u4e1a"),
                                    e.next = 6,
                                    this.getCourseStatus(i.taskId);
                                case 6:
                                    if (e.sent) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    window.pageHistory.push({
                                        pathname: "/task/taskDetail",
                                        search: "taskId=" + i.taskId
                                    }),
                                    e.next = 32;
                                    break;
                                case 12:
                                    if (localStorage.setItem("answerFormPath", "videoPage"),
                                    localStorage.setItem("taskId", i.taskId),
                                    !(i.status < 1)) {
                                        e.next = 28;
                                        break
                                    }
                                    return window.trackEvent("Task", "\u5728\u64ad\u653e\u9875_\u8bfe\u7a0b\u76ee\u5f55-\u70b9\u51fb\u672a\u5b8c\u6210\u7684\u4f5c\u4e1a"),
                                    e.next = 18,
                                    this.getCourseStatus(i.taskId);
                                case 18:
                                    if (e.sent) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 21:
                                    s = "/task/taskAnswer?token=".concat(localStorage.getItem("token"), "&id=").concat(i.examId, "&subjectId=").concat(i.subjectId, "&taskId=").concat(i.taskId, "&examUserId=").concat(i.examUserId),
                                    window.localStorage.setItem("hasRedirectAnswer", s),
                                    window.sessionStorage.setItem("answerBack", "answerBack"),
                                    window.pageHistory.push({
                                        pathname: s
                                    }),
                                    window.location.reload(),
                                    e.next = 32;
                                    break;
                                case 28:
                                    l = "/task/taskAnswer?token=".concat(localStorage.getItem("token"), "&id=").concat(i.examId, "&subjectId=").concat(i.subjectId, "&taskId=").concat(i.taskId, "&examUserId=").concat(i.examUserId, "&repeat="),
                                    window.localStorage.setItem("hasRedirectAnswer", l),
                                    window.pageHistory.push({
                                        pathname: l
                                    }),
                                    window.location.reload();
                                case 32:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t, n, a, o, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "handleList",
                value: function(e) {
                    for (var t = 0; t < e.chapterSectionList.length; t++) {
                        t === e.chapterIndex ? e.chapterSectionList[t].select = !0 : e.chapterSectionList[t].select = !1;
                        for (var n = 0; n < e.chapterSectionList[t].videoList.length; n++)
                            t === e.chapterIndex && n === e.videoIndex && e.isBelongChapter ? (e.chapterSectionList[t].videoList[n].select = !0,
                            de = e.chapterSectionList[t].videoList[n].id,
                            ue = e.chapterSectionList[t].id,
                            this.setState({
                                currentSeek: e.chapterSectionList[t].videoList[n].lastStudyTime
                            })) : e.chapterSectionList[t].videoList[n].select = !1;
                        for (var a = 0; a < e.chapterSectionList[t].sectionList.length; a++) {
                            t === e.chapterIndex && a === e.sectionIndex ? e.chapterSectionList[t].sectionList[a].select = !0 : e.chapterSectionList[t].sectionList[a].select = !1;
                            for (var o = 0; o < e.chapterSectionList[t].sectionList[a].videoList.length; o++)
                                t !== e.chapterIndex || a !== e.sectionIndex || o !== e.videoIndex || e.isBelongChapter ? e.chapterSectionList[t].sectionList[a].videoList[o].select = !1 : (e.chapterSectionList[t].sectionList[a].videoList[o].select = !0,
                                de = e.chapterSectionList[t].sectionList[a].videoList[o].id,
                                ue = e.chapterSectionList[t].sectionList[a].id,
                                this.setState({
                                    currentSeek: e.chapterSectionList[t].sectionList[a].videoList[o].lastStudyTime
                                }))
                        }
                    }
                    return e
                }
            }, {
                key: "handleFileList",
                value: function(e) {
                    for (var t = 0; t < e.chapterSectionList.length; t++) {
                        t === e.chapterIndex ? e.chapterSectionList[t].select = !0 : e.chapterSectionList[t].select = !1;
                        for (var n = 0; n < e.chapterSectionList[t].materialList.length; n++) {
                            t === e.chapterIndex && n === e.fileIndex && e.isBelongChapter ? e.chapterSectionList[t].materialList[n].select = !0 : e.chapterSectionList[t].materialList[n].select = !1;
                            for (var a = 0; a < e.chapterSectionList[t].materialList[n].fileList.length; a++)
                                t === e.chapterIndex && n === e.fileIndex && a === e.filerow && e.isBelongChapter ? (e.chapterSectionList[t].materialList[n].fileList[a].select = !0,
                                he = e.chapterSectionList[t].materialList[n].fileList[a].id) : e.chapterSectionList[t].materialList[n].fileList[a].select = !1
                        }
                        for (var o = 0; o < e.chapterSectionList[t].sectionList.length; o++) {
                            t === e.chapterIndex && o === e.sectionIndex ? e.chapterSectionList[t].sectionList[o].select = !0 : e.chapterSectionList[t].sectionList[o].select = !1;
                            for (var r = 0; r < e.chapterSectionList[t].sectionList[o].materialList.length; r++) {
                                t !== e.chapterIndex || o !== e.sectionIndex || r !== e.fileIndex || e.isBelongChapter ? e.chapterSectionList[t].sectionList[o].materialList[r].select = !1 : e.chapterSectionList[t].sectionList[o].materialList[r].select = !0;
                                for (var i = 0; i < e.chapterSectionList[t].sectionList[o].materialList[r].fileList.length; i++)
                                    t !== e.chapterIndex || o !== e.sectionIndex || r !== e.fileIndex || i !== e.filerow || e.isBelongChapter ? e.chapterSectionList[t].sectionList[o].materialList[r].fileList[i].select = !1 : (e.chapterSectionList[t].sectionList[o].materialList[r].fileList[i].select = !0,
                                    he = e.chapterSectionList[t].sectionList[o].materialList[r].fileList[i].id)
                            }
                        }
                    }
                    return e
                }
            }, {
                key: "setCurrentIndex",
                value: function(e) {
                    this.state.isBelongChapter = e.isBelongChapter,
                    this.state.chapterIndex = e.chapterIndex,
                    this.state.sectionIndex = e.sectionIndex,
                    this.state.videoIndex = e.videoIndex;
                    for (var t = 0; t < e.chapterSectionList.length; t++)
                        if (1 == e.isBelongChapter) {
                            for (var n = 0; n < e.chapterSectionList[t].videoList.length; n++)
                                if (e.chapterIndex == t && e.videoIndex == n) {
                                    this.setState({
                                        currentSeek: e.chapterSectionList[t].videoList[n].lastStudyTime
                                    });
                                    break
                                }
                        } else
                            for (var a = 0; a < e.chapterSectionList[t].sectionList.length; a++)
                                for (var o = 0; o < e.chapterSectionList[t].sectionList[a].videoList.length; o++)
                                    if (e.chapterIndex == t && e.sectionIndex == a && e.videoIndex == o) {
                                        this.setState({
                                            currentSeek: e.chapterSectionList[t].sectionList[a].videoList[o].lastStudyTime
                                        });
                                        break
                                    }
                }
            }, {
                key: "setupVideoStatus",
                value: function(e) {
                    for (var t = 0; t < e.chapterSectionList.length; t++)
                        if (1 == e.isBelongChapter) {
                            for (var n = 0; n < e.chapterSectionList[t].videoList.length; n++)
                                if (e.chapterIndex == t && e.videoIndex == n) {
                                    var a = 0;
                                    this.player && (a = parseInt(this.player.getState().player.currentTime));
                                    var o = le()().format("YYYY-MM-DD HH:mm:ss");
                                    e.chapterSectionList[t].videoList[n].lastStudyDate = o,
                                    e.chapterSectionList[t].videoList[n].lastStudyTime = a;
                                    break
                                }
                        } else
                            for (var r = 0; r < e.chapterSectionList[t].sectionList.length; r++)
                                for (var i = 0; i < e.chapterSectionList[t].sectionList[r].videoList.length; i++)
                                    if (e.chapterIndex == t && e.sectionIndex == r && e.videoIndex == i) {
                                        var s = 0;
                                        this.player && (s = parseInt(this.player.getState().player.currentTime));
                                        var l = le()().format("YYYY-MM-DD HH:mm:ss");
                                        e.chapterSectionList[t].sectionList[r].videoList[i].lastStudyDate = l,
                                        e.chapterSectionList[t].sectionList[r].videoList[i].lastStudyTime = s;
                                        break
                                    }
                    return e
                }
            }, {
                key: "transChapterState",
                value: function(e) {
                    for (var t = e, n = 0; n < t.length; n++) {
                        var a = t[n];
                        a.select ? a.isShow = !0 : a.isShow = !1
                    }
                    return t
                }
            }, {
                key: "handleListState",
                value: function(e) {
                    for (var t = this.state.chapterSectionList, n = 0; n < t.length; n++)
                        n === e && (t[n].isShow = !t[n].isShow),
                        n !== e && (t[n].isShow = !1);
                    this.setState({
                        chapterSectionList: t
                    })
                }
            }, {
                key: "api_getFileDetail",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t) {
                        var n, a, o, i;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = "",
                                    e.next = 3,
                                    h.a.axiosData("post", "/yunkai/web/charterSection/getFileInfo", {
                                        id: t
                                    });
                                case 3:
                                    return "REQ001" === (a = e.sent).code && a.data ? (fe = a.data.name,
                                    o = a.data.fileUrl,
                                    i = h.a.decodeAes(o),
                                    n = i) : m.a.error(a.msg),
                                    e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_getVideoDetail",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t) {
                        var n, a, o;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = "",
                                    e.next = 3,
                                    h.a.axiosData("post", "/yunkai/web/charterSection/getVideoInfo", {
                                        id: t
                                    });
                                case 3:
                                    return "REQ001" === (a = e.sent).code && a.data && a.data.videoUrl ? (pe = a.data.title,
                                    o = a.data.videoUrl,
                                    n = h.a.decodeAes(o)) : m.a.error(a.msg),
                                    e.abrupt("return", n);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_getConfig",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e() {
                        var t;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return me = 10,
                                    e.next = 3,
                                    h.a.axiosData("post", "/yunkai/admin/userstudyrecord/videoTimeConfig", {});
                                case 3:
                                    "REQ001" === (t = e.sent).code && t.data && t.data.videoTime ? (this.state.videoTime = t.data.videoTime,
                                    me = t.data.videoTime) : m.a.error(t.msg),
                                    this.startTimer(me);
                                case 6:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_uploadStudy",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e() {
                        var t, n;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = this.player.getState(),
                                    n = t.player,
                                    e.next = 3,
                                    h.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoProgress", {
                                        lastStudyTime: parseInt(n.currentTime),
                                        charterSectionId: ue,
                                        videoId: de
                                    }, !1);
                                case 3:
                                    e.sent;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_Connect",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e(t) {
                        var n, a, o, s = this;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = !1,
                                    a = this.player.getState(),
                                    o = a.player,
                                    e.prev = 2,
                                    e.next = 5,
                                    h.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                        charterSectionId: ue,
                                        videoId: de,
                                        videoType: 1,
                                        studyTime: t,
                                        uploadType: 1,
                                        localCreateTime: (new Date).getTime(),
                                        appType: 3,
                                        lastStudyTime: parseInt(o.currentTime)
                                    }, !1);
                                case 5:
                                    if ("REQ001" !== (n = e.sent).code || !this.state.networkTimeId) {
                                        e.next = 14;
                                        break
                                    }
                                    return clearTimeout(this.state.networkTimeId),
                                    this.state.networkTimeId = null,
                                    this.state.networkState = !0,
                                    e.next = 12,
                                    h.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                        charterSectionId: ue,
                                        videoId: de,
                                        videoType: 1,
                                        studyTime: this.state.failTotalTime,
                                        uploadType: 2,
                                        localCreateTime: (new Date).getTime(),
                                        appType: 3,
                                        lastStudyTime: parseInt(o.currentTime)
                                    }, !1);
                                case 12:
                                    this.state.failTotalTime = 0,
                                    this.state.failVideo.forEach(function() {
                                        var e = Object(i.a)(r.a.mark(function e(t, n) {
                                            return r.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        de === t.videoId && window.localStorage.setItem("failVideo", JSON.stringify(s.state.failVideo.splice(n, 1)));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 14:
                                    e.next = 18;
                                    break;
                                case 16:
                                    e.prev = 16,
                                    e.t0 = e.catch(2);
                                case 18:
                                    if (!n || n && "REQ001" !== n.code)
                                        try {
                                            window.$(".video-react-icon-fullscreen") && window.$(".video-react-icon-fullscreen").length > 0 ? this.networkClose() : (window.$(".video-react-fullscreen-control").click(),
                                            this.networkClose())
                                        } catch (t) {}
                                case 19:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[2, 16]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_readFile",
                value: function(e) {
                    this.state.readFileTimer = setTimeout(Object(i.a)(r.a.mark(function t() {
                        var n;
                        return r.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2,
                                    h.a.axiosData("post", "/yunkai/web/study/readFile", {
                                        fileId: e
                                    });
                                case 2:
                                    "REQ001" === (n = t.sent).code && n.data;
                                case 4:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    })), 3e3)
                }
            }, {
                key: "networkClose",
                value: function() {
                    var e = Object(i.a)(r.a.mark(function e() {
                        var t, n, a, o, i = this;
                        return r.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    t = this.player.getState(),
                                    !1 === (n = t.player).paused && !1 === n.ended && (this.state.failTotalTime += me),
                                    this.state.networkState && this.player && this.player.pause(),
                                    a = -1,
                                    this.state.failVideo.forEach(function(e, t) {
                                        de === e.videoId && (a = t,
                                        e.time = i.state.failTotalTime)
                                    }),
                                    -1 === a && this.state.failVideo.push({
                                        videoId: de,
                                        time: this.state.failTotalTime
                                    }),
                                    localStorage.setItem("failVideo", JSON.stringify(this.state.failVideo)),
                                    o = v.a.error,
                                    this.state.networkState && (this.state.networkState = !1,
                                    o({
                                        title: "\u63d0\u793a",
                                        content: f.a.createElement("p", null, "\u68c0\u6d4b\u5230\u60a8\u7684\u7f51\u7edc\u8d28\u91cf\u5dee\uff0c\u4e3a\u4e86\u66f4\u597d\u7684\u64ad\u653e\u4f53\u9a8c\u6b63\u5728\u5c1d\u8bd5\u7f13\u5b58\u89c6\u9891\uff0c\u64ad\u653e\u5df2\u81ea\u52a8\u6682\u505c~", f.a.createElement("br", null), "\u8bf7\u70b9\u51fb\u4e0b\u65b9\u201c\u786e\u5b9a\u201d\u6309\u94ae\u5173\u95ed\u6b64\u5f39\u7a97"),
                                        okText: "\u786e\u5b9a",
                                        okButtonProps: {},
                                        cancelText: "\u53d6\u6d88",
                                        onOk: function() {
                                            i.api_uploadStudy(),
                                            i.state.networkTimeId = setTimeout(function() {
                                                i.state.networkState = !0
                                            }, 3e5)
                                        }
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "startTimer",
                value: function(e) {
                    var t = this
                      , n = this;
                    this.stopTimer(),
                    this.state.checkVideoTimer = window.setInterval(function() {
                        if (n.state.isVideo && 1 === n.state.searchData.platform) {
                            var a = n.player.getState().player;
                            parseInt(a.currentTime),
                            (0 == a.paused && 0 == a.ended || !t.state.networkState) && (n.api_uploadStudy(),
                            n.api_Connect(e)),
                            a.ended && n.state.once && (n.api_Connect(e),
                            t.state.once = !1)
                        }
                    }, 1e3 * e)
                }
            }, {
                key: "stopTimer",
                value: function() {
                    this.state.checkVideoTimer && (window.clearInterval(this.state.checkVideoTimer),
                    this.state.checkVideoTimer = null)
                }
            }]),
            t
        }(p.Component);
        t.default = ve
    },
    568: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.create = t.connect = t.Provider = void 0;
        var a = i(n(609))
          , o = i(n(610))
          , r = i(n(612));
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.Provider = a.default,
        t.connect = o.default,
        t.create = r.default
    },
    569: function(e, t) {
        e.exports = function(e, t, n, a) {
            var o = n ? n.call(a, e, t) : void 0;
            if (void 0 !== o)
                return !!o;
            if (e === t)
                return !0;
            if ("object" !== typeof e || !e || "object" !== typeof t || !t)
                return !1;
            var r = Object.keys(e)
              , i = Object.keys(t);
            if (r.length !== i.length)
                return !1;
            for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < r.length; l++) {
                var c = r[l];
                if (!s(c))
                    return !1;
                var u = e[c]
                  , d = t[c];
                if (!1 === (o = n ? n.call(a, u, d, c) : void 0) || void 0 === o && u !== d)
                    return !1
            }
            return !0
        }
    },
    570: function(e, t) {
        e.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    573: function(e, t, n) {
        "use strict";
        var a = n(0)
          , o = n(568)
          , r = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(e) {
                var t = e.keyCode;
                if (e.altKey && !e.ctrlKey || e.metaKey || t >= r.F1 && t <= r.F12)
                    return !1;
                switch (t) {
                case r.ALT:
                case r.CAPS_LOCK:
                case r.CONTEXT_MENU:
                case r.CTRL:
                case r.DOWN:
                case r.END:
                case r.ESC:
                case r.HOME:
                case r.INSERT:
                case r.LEFT:
                case r.MAC_FF_META:
                case r.META:
                case r.NUMLOCK:
                case r.NUM_CENTER:
                case r.PAGE_DOWN:
                case r.PAGE_UP:
                case r.PAUSE:
                case r.PRINT_SCREEN:
                case r.RIGHT:
                case r.SHIFT:
                case r.UP:
                case r.WIN_KEY:
                case r.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
                }
            },
            isCharacterKey: function(e) {
                if (e >= r.ZERO && e <= r.NINE)
                    return !0;
                if (e >= r.NUM_ZERO && e <= r.NUM_MULTIPLY)
                    return !0;
                if (e >= r.A && e <= r.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
                    return !0;
                switch (e) {
                case r.SPACE:
                case r.QUESTION_MARK:
                case r.NUM_PLUS:
                case r.NUM_MINUS:
                case r.NUM_PERIOD:
                case r.NUM_DIVISION:
                case r.SEMICOLON:
                case r.DASH:
                case r.EQUALS:
                case r.COMMA:
                case r.PERIOD:
                case r.SLASH:
                case r.APOSTROPHE:
                case r.SINGLE_QUOTE:
                case r.OPEN_SQUARE_BRACKET:
                case r.BACKSLASH:
                case r.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
                }
            }
        }
          , i = r;
        function s() {
            var e = [].slice.call(arguments, 0);
            return 1 === e.length ? e[0] : function() {
                for (var t = 0; t < e.length; t++)
                    e[t] && e[t].apply && e[t].apply(this, arguments)
            }
        }
        var l = n(569)
          , c = n.n(l)
          , u = n(52)
          , d = n.n(u);
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function h(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)))
                    return;
                var n = []
                  , a = !0
                  , o = !1
                  , r = void 0;
                try {
                    for (var i, s = e[Symbol.iterator](); !(a = (i = s.next()).done) && (n.push(i.value),
                    !t || n.length !== t); a = !0)
                        ;
                } catch (l) {
                    o = !0,
                    r = l
                } finally {
                    try {
                        a || null == s.return || s.return()
                    } finally {
                        if (o)
                            throw r
                    }
                }
                return n
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }()
        }
        var m = /iPhone/i
          , v = /iPod/i
          , y = /iPad/i
          , b = /\bAndroid(?:.+)Mobile\b/i
          , g = /Android/i
          , k = /\bAndroid(?:.+)SD4930UR\b/i
          , S = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i
          , E = /Windows Phone/i
          , A = /\bWindows(?:.+)ARM\b/i
          , w = /BlackBerry/i
          , C = /BB10/i
          , O = /Opera Mini/i
          , T = /\b(CriOS|Chrome)(?:.+)Mobile/i
          , P = /Mobile(?:.+)Firefox\b/i;
        function I(e, t) {
            return e.test(t)
        }
        function N(e) {
            var t = e || ("undefined" !== typeof navigator ? navigator.userAgent : "")
              , n = t.split("[FBAN");
            "undefined" !== typeof n[1] && (t = h(n, 1)[0]);
            "undefined" !== typeof (n = t.split("Twitter"))[1] && (t = h(n, 1)[0]);
            var a = {
                apple: {
                    phone: I(m, t) && !I(E, t),
                    ipod: I(v, t),
                    tablet: !I(m, t) && I(y, t) && !I(E, t),
                    device: (I(m, t) || I(v, t) || I(y, t)) && !I(E, t)
                },
                amazon: {
                    phone: I(k, t),
                    tablet: !I(k, t) && I(S, t),
                    device: I(k, t) || I(S, t)
                },
                android: {
                    phone: !I(E, t) && I(k, t) || !I(E, t) && I(b, t),
                    tablet: !I(E, t) && !I(k, t) && !I(b, t) && (I(S, t) || I(g, t)),
                    device: !I(E, t) && (I(k, t) || I(S, t) || I(b, t) || I(g, t)) || I(/\bokhttp\b/i, t)
                },
                windows: {
                    phone: I(E, t),
                    tablet: I(A, t),
                    device: I(E, t) || I(A, t)
                },
                other: {
                    blackberry: I(w, t),
                    blackberry10: I(C, t),
                    opera: I(O, t),
                    firefox: I(P, t),
                    chrome: I(T, t),
                    device: I(w, t) || I(C, t) || I(O, t) || I(P, t) || I(T, t)
                },
                any: null,
                phone: null,
                tablet: null
            };
            return a.any = a.apple.device || a.android.device || a.windows.device || a.other.device,
            a.phone = a.apple.phone || a.android.phone || a.windows.phone,
            a.tablet = a.apple.tablet || a.android.tablet || a.windows.tablet,
            a
        }
        var x = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? p(Object(n), !0).forEach(function(t) {
                    f(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }({}, N(), {
            isMobile: N
        });
        function M(e) {
            return (M = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function D() {}
        function j(e, t, n) {
            var a = t || "";
            return e.key || "".concat(a, "item_").concat(n)
        }
        function R(e) {
            return "".concat(e, "-menu-")
        }
        function L(e, t) {
            var n = -1;
            a.Children.forEach(e, function(e) {
                n += 1,
                e && e.type && e.type.isMenuItemGroup ? a.Children.forEach(e.props.children, function(e) {
                    t(e, n += 1)
                }) : t(e, n)
            })
        }
        var V = ["defaultSelectedKeys", "selectedKeys", "defaultOpenKeys", "openKeys", "mode", "getPopupContainer", "onSelect", "onDeselect", "onDestroy", "openTransitionName", "openAnimation", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "triggerSubMenuAction", "level", "selectable", "multiple", "onOpenChange", "visible", "focusable", "defaultActiveFirst", "prefixCls", "inlineIndent", "parentMenu", "title", "rootPrefixCls", "eventKey", "active", "onItemHover", "onTitleMouseEnter", "onTitleMouseLeave", "onTitleClick", "popupAlign", "popupOffset", "isOpen", "renderMenuItem", "manualRef", "subMenuKey", "disabled", "index", "isSelected", "store", "activeKey", "builtinPlacements", "overflowedIndicator", "motion", "attribute", "value", "popupClassName", "inlineCollapsed", "menu", "theme", "itemIcon", "expandIcon"]
          , F = function(e) {
            var t = e && "function" === typeof e.getBoundingClientRect && e.getBoundingClientRect().width;
            return t && (t = +t.toFixed(6)),
            t || 0
        }
          , B = function(e, t, n) {
            e && "object" === M(e.style) && (e.style[t] = n)
        }
          , U = function() {
            return x.any
        }
          , K = n(42)
          , Q = n(628)
          , z = n(603)
          , G = n(616)
          , J = {
            adjustX: 1,
            adjustY: 1
        }
          , H = {
            topLeft: {
                points: ["bl", "tl"],
                overflow: J,
                offset: [0, -7]
            },
            bottomLeft: {
                points: ["tl", "bl"],
                overflow: J,
                offset: [0, 7]
            },
            leftTop: {
                points: ["tr", "tl"],
                overflow: J,
                offset: [-4, 0]
            },
            rightTop: {
                points: ["tl", "tr"],
                overflow: J,
                offset: [4, 0]
            }
        };
        function _(e) {
            return (_ = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Y(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function W(e) {
            return (W = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Z(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function X(e, t) {
            return (X = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function q(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? q(Object(n), !0).forEach(function(t) {
                    ee(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ee(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var te = 0
          , ne = {
            horizontal: "bottomLeft",
            vertical: "rightTop",
            "vertical-left": "rightTop",
            "vertical-right": "leftTop"
        }
          , ae = function(e, t, n) {
            var a = R(t)
              , o = e.getState();
            e.setState({
                defaultActiveFirst: $({}, o.defaultActiveFirst, ee({}, a, n))
            })
        }
          , oe = function(e) {
            function t(e) {
                var n, o, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                o = this,
                r = W(t).call(this, e),
                (n = !r || "object" !== _(r) && "function" !== typeof r ? Z(o) : r).onDestroy = function(e) {
                    n.props.onDestroy(e)
                }
                ,
                n.onKeyDown = function(e) {
                    var t = e.keyCode
                      , a = n.menuInstance
                      , o = n.props
                      , r = o.isOpen
                      , s = o.store;
                    if (t === i.ENTER)
                        return n.onTitleClick(e),
                        ae(s, n.props.eventKey, !0),
                        !0;
                    if (t === i.RIGHT)
                        return r ? a.onKeyDown(e) : (n.triggerOpenChange(!0),
                        ae(s, n.props.eventKey, !0)),
                        !0;
                    if (t === i.LEFT) {
                        var l;
                        if (!r)
                            return;
                        return (l = a.onKeyDown(e)) || (n.triggerOpenChange(!1),
                        l = !0),
                        l
                    }
                    return !r || t !== i.UP && t !== i.DOWN ? void 0 : a.onKeyDown(e)
                }
                ,
                n.onOpenChange = function(e) {
                    n.props.onOpenChange(e)
                }
                ,
                n.onPopupVisibleChange = function(e) {
                    n.triggerOpenChange(e, e ? "mouseenter" : "mouseleave")
                }
                ,
                n.onMouseEnter = function(e) {
                    var t = n.props
                      , a = t.eventKey
                      , o = t.onMouseEnter
                      , r = t.store;
                    ae(r, n.props.eventKey, !1),
                    o({
                        key: a,
                        domEvent: e
                    })
                }
                ,
                n.onMouseLeave = function(e) {
                    var t = n.props
                      , a = t.parentMenu
                      , o = t.eventKey
                      , r = t.onMouseLeave;
                    a.subMenuInstance = Z(n),
                    r({
                        key: o,
                        domEvent: e
                    })
                }
                ,
                n.onTitleMouseEnter = function(e) {
                    var t = n.props
                      , a = t.eventKey
                      , o = t.onItemHover
                      , r = t.onTitleMouseEnter;
                    o({
                        key: a,
                        hover: !0
                    }),
                    r({
                        key: a,
                        domEvent: e
                    })
                }
                ,
                n.onTitleMouseLeave = function(e) {
                    var t = n.props
                      , a = t.parentMenu
                      , o = t.eventKey
                      , r = t.onItemHover
                      , i = t.onTitleMouseLeave;
                    a.subMenuInstance = Z(n),
                    r({
                        key: o,
                        hover: !1
                    }),
                    i({
                        key: o,
                        domEvent: e
                    })
                }
                ,
                n.onTitleClick = function(e) {
                    var t = Z(n).props;
                    t.onTitleClick({
                        key: t.eventKey,
                        domEvent: e
                    }),
                    "hover" !== t.triggerSubMenuAction && (n.triggerOpenChange(!t.isOpen, "click"),
                    ae(t.store, n.props.eventKey, !1))
                }
                ,
                n.onSubMenuClick = function(e) {
                    "function" === typeof n.props.onClick && n.props.onClick(n.addKeyPath(e))
                }
                ,
                n.onSelect = function(e) {
                    n.props.onSelect(e)
                }
                ,
                n.onDeselect = function(e) {
                    n.props.onDeselect(e)
                }
                ,
                n.getPrefixCls = function() {
                    return "".concat(n.props.rootPrefixCls, "-submenu")
                }
                ,
                n.getActiveClassName = function() {
                    return "".concat(n.getPrefixCls(), "-active")
                }
                ,
                n.getDisabledClassName = function() {
                    return "".concat(n.getPrefixCls(), "-disabled")
                }
                ,
                n.getSelectedClassName = function() {
                    return "".concat(n.getPrefixCls(), "-selected")
                }
                ,
                n.getOpenClassName = function() {
                    return "".concat(n.props.rootPrefixCls, "-submenu-open")
                }
                ,
                n.saveMenuInstance = function(e) {
                    n.menuInstance = e
                }
                ,
                n.addKeyPath = function(e) {
                    return $({}, e, {
                        keyPath: (e.keyPath || []).concat(n.props.eventKey)
                    })
                }
                ,
                n.triggerOpenChange = function(e, t) {
                    var a = n.props.eventKey
                      , o = function() {
                        n.onOpenChange({
                            key: a,
                            item: Z(n),
                            trigger: t,
                            open: e
                        })
                    };
                    "mouseenter" === t ? n.mouseenterTimeout = setTimeout(function() {
                        o()
                    }, 0) : o()
                }
                ,
                n.isChildrenSelected = function() {
                    var e = {
                        find: !1
                    };
                    return function e(t, n, o) {
                        t && !o.find && a.Children.forEach(t, function(t) {
                            if (t) {
                                var a = t.type;
                                if (!a || !(a.isSubMenu || a.isMenuItem || a.isMenuItemGroup))
                                    return;
                                -1 !== n.indexOf(t.key) ? o.find = !0 : t.props.children && e(t.props.children, n, o)
                            }
                        })
                    }(n.props.children, n.props.selectedKeys, e),
                    e.find
                }
                ,
                n.isOpen = function() {
                    return -1 !== n.props.openKeys.indexOf(n.props.eventKey)
                }
                ,
                n.adjustWidth = function() {
                    if (n.subMenuTitle && n.menuInstance) {
                        var e = K.findDOMNode(n.menuInstance);
                        e.offsetWidth >= n.subMenuTitle.offsetWidth || (e.style.minWidth = "".concat(n.subMenuTitle.offsetWidth, "px"))
                    }
                }
                ,
                n.saveSubMenuTitle = function(e) {
                    n.subMenuTitle = e
                }
                ;
                var s = e.store
                  , l = e.eventKey
                  , c = s.getState().defaultActiveFirst;
                n.isRootMenu = !1;
                var u = !1;
                return c && (u = c[l]),
                ae(s, l, u),
                n
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && X(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.componentDidUpdate()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.mode
                      , a = t.parentMenu
                      , o = t.manualRef;
                    o && o(this),
                    "horizontal" === n && a.isRootMenu && this.props.isOpen && (this.minWidthTimeout = setTimeout(function() {
                        return e.adjustWidth()
                    }, 0))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props
                      , t = e.onDestroy
                      , n = e.eventKey;
                    t && t(n),
                    this.minWidthTimeout && clearTimeout(this.minWidthTimeout),
                    this.mouseenterTimeout && clearTimeout(this.mouseenterTimeout)
                }
            }, {
                key: "renderChildren",
                value: function(e) {
                    var t = this
                      , n = this.props
                      , o = {
                        mode: "horizontal" === n.mode ? "vertical" : n.mode,
                        visible: this.props.isOpen,
                        level: n.level + 1,
                        inlineIndent: n.inlineIndent,
                        focusable: !1,
                        onClick: this.onSubMenuClick,
                        onSelect: this.onSelect,
                        onDeselect: this.onDeselect,
                        onDestroy: this.onDestroy,
                        selectedKeys: n.selectedKeys,
                        eventKey: "".concat(n.eventKey, "-menu-"),
                        openKeys: n.openKeys,
                        motion: n.motion,
                        onOpenChange: this.onOpenChange,
                        subMenuOpenDelay: n.subMenuOpenDelay,
                        parentMenu: this,
                        subMenuCloseDelay: n.subMenuCloseDelay,
                        forceSubMenuRender: n.forceSubMenuRender,
                        triggerSubMenuAction: n.triggerSubMenuAction,
                        builtinPlacements: n.builtinPlacements,
                        defaultActiveFirst: n.store.getState().defaultActiveFirst[R(n.eventKey)],
                        multiple: n.multiple,
                        prefixCls: n.rootPrefixCls,
                        id: this.internalMenuId,
                        manualRef: this.saveMenuInstance,
                        itemIcon: n.itemIcon,
                        expandIcon: n.expandIcon
                    }
                      , r = this.haveRendered;
                    if (this.haveRendered = !0,
                    this.haveOpened = this.haveOpened || o.visible || o.forceSubMenuRender,
                    !this.haveOpened)
                        return a.createElement("div", null);
                    var i = $({}, n.motion, {
                        leavedClassName: "".concat(n.rootPrefixCls, "-hidden"),
                        removeOnLeave: !1,
                        motionAppear: r || !o.visible || "inline" !== o.mode
                    });
                    return a.createElement(G.a, Object.assign({
                        visible: o.visible
                    }, i), function(n) {
                        var r = n.className
                          , i = n.style
                          , s = d()("".concat(o.prefixCls, "-sub"), r);
                        return a.createElement(Le, Object.assign({}, o, {
                            id: t.internalMenuId,
                            className: s,
                            style: i
                        }), e)
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = $({}, this.props), n = t.isOpen, o = this.getPrefixCls(), r = "inline" === t.mode, i = d()(o, "".concat(o, "-").concat(t.mode), (ee(e = {}, t.className, !!t.className),
                    ee(e, this.getOpenClassName(), n),
                    ee(e, this.getActiveClassName(), t.active || n && !r),
                    ee(e, this.getDisabledClassName(), t.disabled),
                    ee(e, this.getSelectedClassName(), this.isChildrenSelected()),
                    e));
                    this.internalMenuId || (t.eventKey ? this.internalMenuId = "".concat(t.eventKey, "$Menu") : (te += 1,
                    this.internalMenuId = "$__$".concat(te, "$Menu")));
                    var s = {}
                      , l = {}
                      , c = {};
                    t.disabled || (s = {
                        onMouseLeave: this.onMouseLeave,
                        onMouseEnter: this.onMouseEnter
                    },
                    l = {
                        onClick: this.onTitleClick
                    },
                    c = {
                        onMouseEnter: this.onTitleMouseEnter,
                        onMouseLeave: this.onTitleMouseLeave
                    });
                    var u = {};
                    r && (u.paddingLeft = t.inlineIndent * t.level);
                    var p = {};
                    this.props.isOpen && (p = {
                        "aria-owns": this.internalMenuId
                    });
                    var f = null;
                    "horizontal" !== t.mode && (f = this.props.expandIcon,
                    "function" === typeof this.props.expandIcon && (f = a.createElement(this.props.expandIcon, $({}, this.props))));
                    var h = a.createElement("div", Object.assign({
                        ref: this.saveSubMenuTitle,
                        style: u,
                        className: "".concat(o, "-title")
                    }, c, l, {
                        "aria-expanded": n
                    }, p, {
                        "aria-haspopup": "true",
                        title: "string" === typeof t.title ? t.title : void 0
                    }), t.title, f || a.createElement("i", {
                        className: "".concat(o, "-arrow")
                    }))
                      , m = this.renderChildren(t.children)
                      , v = t.parentMenu.isRootMenu ? t.parentMenu.props.getPopupContainer : function(e) {
                        return e.parentNode
                    }
                      , y = ne[t.mode]
                      , b = t.popupOffset ? {
                        offset: t.popupOffset
                    } : {}
                      , g = "inline" === t.mode ? "" : t.popupClassName
                      , k = t.disabled
                      , S = t.triggerSubMenuAction
                      , E = t.subMenuOpenDelay
                      , A = t.forceSubMenuRender
                      , w = t.subMenuCloseDelay
                      , C = t.builtinPlacements;
                    return V.forEach(function(e) {
                        return delete t[e]
                    }),
                    delete t.onClick,
                    a.createElement("li", Object.assign({}, t, s, {
                        className: i,
                        role: "menuitem"
                    }), r && h, r && m, !r && a.createElement(z.a, {
                        prefixCls: o,
                        popupClassName: "".concat(o, "-popup ").concat(g),
                        getPopupContainer: v,
                        builtinPlacements: Object.assign({}, H, C),
                        popupPlacement: y,
                        popupVisible: n,
                        popupAlign: b,
                        popup: m,
                        action: k ? [] : [S],
                        mouseEnterDelay: E,
                        mouseLeaveDelay: w,
                        onPopupVisibleChange: this.onPopupVisibleChange,
                        forceRender: A
                    }, h))
                }
            }]) && Y(n.prototype, o),
            r && Y(n, r),
            t
        }();
        oe.defaultProps = {
            onMouseEnter: D,
            onMouseLeave: D,
            onTitleMouseEnter: D,
            onTitleMouseLeave: D,
            onTitleClick: D,
            manualRef: D,
            mode: "vertical",
            title: ""
        };
        var re = Object(o.connect)(function(e, t) {
            var n = e.openKeys
              , a = e.activeKey
              , o = e.selectedKeys
              , r = t.eventKey
              , i = t.subMenuKey;
            return {
                isOpen: n.indexOf(r) > -1,
                active: a[i] === r,
                selectedKeys: o
            }
        })(oe);
        re.isSubMenu = !0;
        var ie = re;
        function se(e) {
            return (se = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function le(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function ce(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function ue(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ce(Object(n), !0).forEach(function(t) {
                    de(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ce(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function de(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function pe(e, t) {
            if (null == e)
                return {};
            var n, a, o = function(e, t) {
                if (null == e)
                    return {};
                var n, a, o = {}, r = Object.keys(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (a = 0; a < r.length; a++)
                    n = r[a],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function fe(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function he(e) {
            return (he = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function me(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ve(e, t) {
            return (ve = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ye = !("undefined" === typeof window || !window.document || !window.document.createElement)
          , be = "menuitem-overflowed"
          , ge = .5;
        ye && n(614);
        var ke = function(e) {
            function t() {
                var e, n, o;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                n = this,
                o = he(t).apply(this, arguments),
                (e = !o || "object" !== se(o) && "function" !== typeof o ? me(n) : o).resizeObserver = null,
                e.mutationObserver = null,
                e.originalTotalWidth = 0,
                e.overflowedItems = [],
                e.menuItemSizes = [],
                e.state = {
                    lastVisibleIndex: void 0
                },
                e.getMenuItemNodes = function() {
                    var t = e.props.prefixCls
                      , n = K.findDOMNode(me(e));
                    return n ? [].slice.call(n.children).filter(function(e) {
                        return e.className.split(" ").indexOf("".concat(t, "-overflowed-submenu")) < 0
                    }) : []
                }
                ,
                e.getOverflowedSubMenuItem = function(t, n, o) {
                    var r = e.props
                      , i = r.overflowedIndicator
                      , s = r.level
                      , l = r.mode
                      , c = r.prefixCls
                      , u = r.theme;
                    if (1 !== s || "horizontal" !== l)
                        return null;
                    var d = e.props.children[0].props
                      , p = (d.children,
                    d.title,
                    d.style)
                      , f = pe(d, ["children", "title", "style"])
                      , h = ue({}, p)
                      , m = "".concat(t, "-overflowed-indicator")
                      , v = "".concat(t, "-overflowed-indicator");
                    0 === n.length && !0 !== o ? h = ue({}, h, {
                        display: "none"
                    }) : o && (h = ue({}, h, {
                        visibility: "hidden",
                        position: "absolute"
                    }),
                    m = "".concat(m, "-placeholder"),
                    v = "".concat(v, "-placeholder"));
                    var y = u ? "".concat(c, "-").concat(u) : ""
                      , b = {};
                    return V.forEach(function(e) {
                        void 0 !== f[e] && (b[e] = f[e])
                    }),
                    a.createElement(ie, Object.assign({
                        title: i,
                        className: "".concat(c, "-overflowed-submenu"),
                        popupClassName: y
                    }, b, {
                        key: m,
                        eventKey: v,
                        disabled: !1,
                        style: h
                    }), n)
                }
                ,
                e.setChildrenWidthAndResize = function() {
                    if ("horizontal" === e.props.mode) {
                        var t = K.findDOMNode(me(e));
                        if (t) {
                            var n = t.children;
                            if (n && 0 !== n.length) {
                                var a = t.children[n.length - 1];
                                B(a, "display", "inline-block");
                                var o = e.getMenuItemNodes()
                                  , r = o.filter(function(e) {
                                    return e.className.split(" ").indexOf(be) >= 0
                                });
                                r.forEach(function(e) {
                                    B(e, "display", "inline-block")
                                }),
                                e.menuItemSizes = o.map(function(e) {
                                    return F(e)
                                }),
                                r.forEach(function(e) {
                                    B(e, "display", "none")
                                }),
                                e.overflowedIndicatorWidth = F(t.children[t.children.length - 1]),
                                e.originalTotalWidth = e.menuItemSizes.reduce(function(e, t) {
                                    return e + t
                                }, 0),
                                e.handleResize(),
                                B(a, "display", "none")
                            }
                        }
                    }
                }
                ,
                e.handleResize = function() {
                    if ("horizontal" === e.props.mode) {
                        var t = K.findDOMNode(me(e));
                        if (t) {
                            var n = F(t);
                            e.overflowedItems = [];
                            var a, o = 0;
                            e.originalTotalWidth > n + ge && (a = -1,
                            e.menuItemSizes.forEach(function(t) {
                                (o += t) + e.overflowedIndicatorWidth <= n && (a += 1)
                            })),
                            e.setState({
                                lastVisibleIndex: a
                            })
                        }
                    }
                }
                ,
                e
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ve(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    if (this.setChildrenWidthAndResize(),
                    1 === this.props.level && "horizontal" === this.props.mode) {
                        var t = K.findDOMNode(this);
                        if (!t)
                            return;
                        this.resizeObserver = new Q.default(function(t) {
                            t.forEach(e.setChildrenWidthAndResize)
                        }
                        ),
                        [].slice.call(t.children).concat(t).forEach(function(t) {
                            e.resizeObserver.observe(t)
                        }),
                        "undefined" !== typeof MutationObserver && (this.mutationObserver = new MutationObserver(function() {
                            e.resizeObserver.disconnect(),
                            [].slice.call(t.children).concat(t).forEach(function(t) {
                                e.resizeObserver.observe(t)
                            }),
                            e.setChildrenWidthAndResize()
                        }
                        ),
                        this.mutationObserver.observe(t, {
                            attributes: !1,
                            childList: !0,
                            subTree: !1
                        }))
                    }
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.resizeObserver && this.resizeObserver.disconnect(),
                    this.mutationObserver && this.mutationObserver.disconnect()
                }
            }, {
                key: "renderChildren",
                value: function(e) {
                    var t = this
                      , n = this.state.lastVisibleIndex;
                    return (e || []).reduce(function(o, r, i) {
                        var s = r;
                        if ("horizontal" === t.props.mode) {
                            var l = t.getOverflowedSubMenuItem(r.props.eventKey, []);
                            void 0 !== n && -1 !== t.props.className.indexOf("".concat(t.props.prefixCls, "-root")) && (i > n && (s = a.cloneElement(r, {
                                style: {
                                    display: "none"
                                },
                                eventKey: "".concat(r.props.eventKey, "-hidden"),
                                className: "".concat(be)
                            })),
                            i === n + 1 && (t.overflowedItems = e.slice(n + 1).map(function(e) {
                                return a.cloneElement(e, {
                                    key: e.props.eventKey,
                                    mode: "vertical-left"
                                })
                            }),
                            l = t.getOverflowedSubMenuItem(r.props.eventKey, t.overflowedItems)));
                            var c = [].concat(le(o), [l, s]);
                            return i === e.length - 1 && c.push(t.getOverflowedSubMenuItem(r.props.eventKey, [], !0)),
                            c
                        }
                        return [].concat(le(o), [s])
                    }, [])
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = (e.visible,
                    e.prefixCls,
                    e.overflowedIndicator,
                    e.mode,
                    e.level,
                    e.tag)
                      , n = e.children
                      , o = (e.theme,
                    pe(e, ["visible", "prefixCls", "overflowedIndicator", "mode", "level", "tag", "children", "theme"]))
                      , r = t;
                    return a.createElement(r, Object.assign({}, o), this.renderChildren(n))
                }
            }]) && fe(n.prototype, o),
            r && fe(n, r),
            t
        }();
        ke.defaultProps = {
            tag: "div",
            className: ""
        };
        var Se = ke;
        function Ee(e) {
            return (Ee = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ae() {
            return (Ae = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function we(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function Ce(e) {
            return (Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function Oe(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Te(e, t) {
            return (Te = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Pe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function Ie(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Pe(Object(n), !0).forEach(function(t) {
                    Ne(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function Ne(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function xe(e, t, n) {
            var a = e.getState();
            e.setState({
                activeKey: Ie({}, a.activeKey, Ne({}, t, n))
            })
        }
        function Me(e) {
            return e.eventKey || "0-menu-"
        }
        function De(e, t) {
            var n, a = t, o = e.children, r = e.eventKey;
            if (a && (L(o, function(e, t) {
                e && e.props && !e.props.disabled && a === j(e, r, t) && (n = !0)
            }),
            n))
                return a;
            return a = null,
            e.defaultActiveFirst ? (L(o, function(e, t) {
                a || !e || e.props.disabled || (a = j(e, r, t))
            }),
            a) : a
        }
        function je(e) {
            if (e) {
                var t = this.instanceArray.indexOf(e);
                -1 !== t ? this.instanceArray[t] = e : this.instanceArray.push(e)
            }
        }
        var Re = function(e) {
            function t(e) {
                var n, o, r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                o = this,
                r = Ce(t).call(this, e),
                (n = !r || "object" !== Ee(r) && "function" !== typeof r ? Oe(o) : r).onKeyDown = function(e, t) {
                    var a, o = e.keyCode;
                    if (n.getFlatInstanceArray().forEach(function(t) {
                        t && t.props.active && t.onKeyDown && (a = t.onKeyDown(e))
                    }),
                    a)
                        return 1;
                    var r = null;
                    return o !== i.UP && o !== i.DOWN || (r = n.step(o === i.UP ? -1 : 1)),
                    r ? (e.preventDefault(),
                    xe(n.props.store, Me(n.props), r.props.eventKey),
                    "function" === typeof t && t(r),
                    1) : void 0
                }
                ,
                n.onItemHover = function(e) {
                    var t = e.key
                      , a = e.hover;
                    xe(n.props.store, Me(n.props), a ? t : null)
                }
                ,
                n.onDeselect = function(e) {
                    n.props.onDeselect(e)
                }
                ,
                n.onSelect = function(e) {
                    n.props.onSelect(e)
                }
                ,
                n.onClick = function(e) {
                    n.props.onClick(e)
                }
                ,
                n.onOpenChange = function(e) {
                    n.props.onOpenChange(e)
                }
                ,
                n.onDestroy = function(e) {
                    n.props.onDestroy(e)
                }
                ,
                n.getFlatInstanceArray = function() {
                    return n.instanceArray
                }
                ,
                n.step = function(e) {
                    var t = n.getFlatInstanceArray()
                      , a = n.props.store.getState().activeKey[Me(n.props)]
                      , o = t.length;
                    if (!o)
                        return null;
                    e < 0 && (t = t.concat().reverse());
                    var r = -1;
                    if (t.every(function(e, t) {
                        return !e || e.props.eventKey !== a || (r = t,
                        !1)
                    }),
                    n.props.defaultActiveFirst || -1 === r || (i = t.slice(r, o - 1)).length && !i.every(function(e) {
                        return !!e.props.disabled
                    })) {
                        var i, s = (r + 1) % o, l = s;
                        do {
                            var c = t[l];
                            if (c && !c.props.disabled)
                                return c;
                            l = (l + 1) % o
                        } while (l !== s);
                        return null
                    }
                }
                ,
                n.renderCommonMenuItem = function(e, t, o) {
                    var r = n.props.store.getState()
                      , i = Oe(n).props
                      , l = j(e, i.eventKey, t)
                      , c = e.props;
                    if (!c || "string" === typeof e.type)
                        return e;
                    var u = l === r.activeKey
                      , d = Ie({
                        mode: c.mode || i.mode,
                        level: i.level,
                        inlineIndent: i.inlineIndent,
                        renderMenuItem: n.renderMenuItem,
                        rootPrefixCls: i.prefixCls,
                        index: t,
                        parentMenu: i.parentMenu,
                        manualRef: c.disabled ? void 0 : s(e.ref, je.bind(Oe(n))),
                        eventKey: l,
                        active: !c.disabled && u,
                        multiple: i.multiple,
                        onClick: function(e) {
                            (c.onClick || D)(e),
                            n.onClick(e)
                        },
                        onItemHover: n.onItemHover,
                        motion: i.motion,
                        subMenuOpenDelay: i.subMenuOpenDelay,
                        subMenuCloseDelay: i.subMenuCloseDelay,
                        forceSubMenuRender: i.forceSubMenuRender,
                        onOpenChange: n.onOpenChange,
                        onDeselect: n.onDeselect,
                        onSelect: n.onSelect,
                        builtinPlacements: i.builtinPlacements,
                        itemIcon: c.itemIcon || n.props.itemIcon,
                        expandIcon: c.expandIcon || n.props.expandIcon
                    }, o);
                    return ("inline" === i.mode || U()) && (d.triggerSubMenuAction = "click"),
                    a.cloneElement(e, d)
                }
                ,
                n.renderMenuItem = function(e, t, a) {
                    if (!e)
                        return null;
                    var o = n.props.store.getState()
                      , r = {
                        openKeys: o.openKeys,
                        selectedKeys: o.selectedKeys,
                        triggerSubMenuAction: n.props.triggerSubMenuAction,
                        subMenuKey: a
                    };
                    return n.renderCommonMenuItem(e, t, r)
                }
                ,
                e.store.setState({
                    activeKey: Ie({}, e.store.getState().activeKey, Ne({}, e.eventKey, De(e, e.activeKey)))
                }),
                n.instanceArray = [],
                n
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Te(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.props.manualRef && this.props.manualRef(this)
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return this.props.visible || e.visible || this.props.className !== e.className || !c()(this.props.style, e.style)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = "activeKey"in t ? t.activeKey : t.store.getState().activeKey[Me(t)]
                      , a = De(t, n);
                    if (a !== n)
                        xe(t.store, Me(t), a);
                    else if ("activeKey"in e) {
                        a !== De(e, e.activeKey) && xe(t.store, Me(t), a)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = Ae({}, this.props);
                    this.instanceArray = [];
                    var n = {
                        className: d()(t.prefixCls, t.className, "".concat(t.prefixCls, "-").concat(t.mode)),
                        role: t.role || "menu"
                    };
                    t.id && (n.id = t.id),
                    t.focusable && (n.tabIndex = 0,
                    n.onKeyDown = this.onKeyDown);
                    var o = t.prefixCls
                      , r = t.eventKey
                      , i = t.visible
                      , s = t.level
                      , l = t.mode
                      , c = t.overflowedIndicator
                      , u = t.theme;
                    return V.forEach(function(e) {
                        return delete t[e]
                    }),
                    delete t.onClick,
                    a.createElement(Se, Object.assign({}, t, {
                        prefixCls: o,
                        mode: l,
                        tag: "ul",
                        level: s,
                        theme: u,
                        visible: i,
                        overflowedIndicator: c
                    }, n), a.Children.map(t.children, function(t, n) {
                        return e.renderMenuItem(t, n, r || "0-menu-")
                    }))
                }
            }]) && we(n.prototype, o),
            r && we(n, r),
            t
        }();
        Re.defaultProps = {
            prefixCls: "rc-menu",
            className: "",
            mode: "vertical",
            level: 1,
            inlineIndent: 24,
            visible: !0,
            focusable: !0,
            style: {},
            manualRef: D
        };
        var Le = Object(o.connect)()(Re)
          , Ve = {};
        function Fe(e, t) {
            0
        }
        function Be(e, t, n) {
            t || Ve[n] || (e(!1, n),
            Ve[n] = !0)
        }
        var Ue = function(e, t) {
            Be(Fe, e, t)
        };
        function Ke(e) {
            return (Ke = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Qe(e) {
            var t = e.prefixCls
              , n = e.motion
              , a = e.openAnimation
              , o = e.openTransitionName;
            if (n)
                return n;
            if ("object" === Ke(a) && a)
                Ue(!1, "Object type of `openAnimation` is removed. Please use `motion` instead.");
            else if ("string" === typeof a)
                return {
                    motionName: "".concat(t, "-open-").concat(a)
                };
            return o ? {
                motionName: o
            } : null
        }
        function ze(e) {
            return (ze = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Ge(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function Je(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ge(Object(n), !0).forEach(function(t) {
                    He(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ge(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function He(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function _e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function Ye(e) {
            return (Ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function We(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function Ze(e, t) {
            return (Ze = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var Xe = function(e) {
            function t(e) {
                var n, a, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                a = this,
                r = Ye(t).call(this, e),
                (n = !r || "object" !== ze(r) && "function" !== typeof r ? We(a) : r).onSelect = function(e) {
                    var t = We(n).props;
                    if (t.selectable) {
                        var a = n.store.getState().selectedKeys
                          , o = e.key;
                        a = t.multiple ? a.concat([o]) : [o],
                        "selectedKeys"in t || n.store.setState({
                            selectedKeys: a
                        }),
                        t.onSelect(Je({}, e, {
                            selectedKeys: a
                        }))
                    }
                }
                ,
                n.onClick = function(e) {
                    n.props.onClick(e)
                }
                ,
                n.onKeyDown = function(e, t) {
                    n.innerMenu.getWrappedInstance().onKeyDown(e, t)
                }
                ,
                n.onOpenChange = function(e) {
                    var t = We(n).props
                      , a = n.store.getState().openKeys.concat()
                      , o = !1
                      , r = function(e) {
                        var t = !1;
                        if (e.open)
                            (t = -1 === a.indexOf(e.key)) && a.push(e.key);
                        else {
                            var n = a.indexOf(e.key);
                            (t = -1 !== n) && a.splice(n, 1)
                        }
                        o = o || t
                    };
                    Array.isArray(e) ? e.forEach(r) : r(e),
                    o && ("openKeys"in n.props || n.store.setState({
                        openKeys: a
                    }),
                    t.onOpenChange(a))
                }
                ,
                n.onDeselect = function(e) {
                    var t = We(n).props;
                    if (t.selectable) {
                        var a = n.store.getState().selectedKeys.concat()
                          , o = e.key
                          , r = a.indexOf(o);
                        -1 !== r && a.splice(r, 1),
                        "selectedKeys"in t || n.store.setState({
                            selectedKeys: a
                        }),
                        t.onDeselect(Je({}, e, {
                            selectedKeys: a
                        }))
                    }
                }
                ,
                n.getOpenTransitionName = function() {
                    var e = We(n).props
                      , t = e.openTransitionName
                      , a = e.openAnimation;
                    return t || "string" !== typeof a || (t = "".concat(e.prefixCls, "-open-").concat(a)),
                    t
                }
                ,
                n.setInnerMenu = function(e) {
                    n.innerMenu = e
                }
                ,
                n.isRootMenu = !0;
                var i = e.defaultSelectedKeys
                  , s = e.defaultOpenKeys;
                return "selectedKeys"in e && (i = e.selectedKeys || []),
                "openKeys"in e && (s = e.openKeys || []),
                n.store = Object(o.create)({
                    selectedKeys: i,
                    openKeys: s,
                    activeKey: {
                        "0-menu-": De(e, e.activeKey)
                    }
                }),
                n
            }
            var n, r, i;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Ze(e, t)
            }(t, a["Component"]),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    this.updateMiniStore()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.updateMiniStore()
                }
            }, {
                key: "updateMiniStore",
                value: function() {
                    "selectedKeys"in this.props && this.store.setState({
                        selectedKeys: this.props.selectedKeys || []
                    }),
                    "openKeys"in this.props && this.store.setState({
                        openKeys: this.props.openKeys || []
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = Je({}, this.props);
                    return e.className += " ".concat(e.prefixCls, "-root"),
                    delete (e = Je({}, e, {
                        onClick: this.onClick,
                        onOpenChange: this.onOpenChange,
                        onDeselect: this.onDeselect,
                        onSelect: this.onSelect,
                        parentMenu: this,
                        motion: Qe(this.props)
                    })).openAnimation,
                    delete e.openTransitionName,
                    a.createElement(o.Provider, {
                        store: this.store
                    }, a.createElement(Le, Object.assign({}, e, {
                        ref: this.setInnerMenu
                    }), this.props.children))
                }
            }]) && _e(n.prototype, r),
            i && _e(n, i),
            t
        }();
        Xe.defaultProps = {
            selectable: !0,
            onClick: D,
            onSelect: D,
            onOpenChange: D,
            onDeselect: D,
            defaultSelectedKeys: [],
            defaultOpenKeys: [],
            subMenuOpenDelay: .1,
            subMenuCloseDelay: .1,
            triggerSubMenuAction: "hover",
            prefixCls: "rc-menu",
            className: "",
            mode: "vertical",
            style: {},
            builtinPlacements: {},
            overflowedIndicator: a.createElement("span", null, "\xb7\xb7\xb7")
        };
        var qe = Xe
          , $e = n(608)
          , et = n.n($e);
        function tt(e) {
            return (tt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function nt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                t && (a = a.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, a)
            }
            return n
        }
        function at(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nt(Object(n), !0).forEach(function(t) {
                    ot(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function ot(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function rt(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function it(e) {
            return (it = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function st(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function lt(e, t) {
            return (lt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var ct = function(e) {
            function t() {
                var e, n, a;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                n = this,
                a = it(t).apply(this, arguments),
                (e = !a || "object" !== tt(a) && "function" !== typeof a ? st(n) : a).onKeyDown = function(t) {
                    if (t.keyCode === i.ENTER)
                        return e.onClick(t),
                        !0
                }
                ,
                e.onMouseLeave = function(t) {
                    var n = e.props
                      , a = n.eventKey
                      , o = n.onItemHover
                      , r = n.onMouseLeave;
                    o({
                        key: a,
                        hover: !1
                    }),
                    r({
                        key: a,
                        domEvent: t
                    })
                }
                ,
                e.onMouseEnter = function(t) {
                    var n = e.props
                      , a = n.eventKey
                      , o = n.onItemHover
                      , r = n.onMouseEnter;
                    o({
                        key: a,
                        hover: !0
                    }),
                    r({
                        key: a,
                        domEvent: t
                    })
                }
                ,
                e.onClick = function(t) {
                    var n = e.props
                      , a = n.eventKey
                      , o = n.multiple
                      , r = n.onClick
                      , i = n.onSelect
                      , s = n.onDeselect
                      , l = n.isSelected
                      , c = {
                        key: a,
                        keyPath: [a],
                        item: st(e),
                        domEvent: t
                    };
                    r(c),
                    o ? l ? s(c) : i(c) : l || i(c)
                }
                ,
                e.saveNode = function(t) {
                    e.node = t
                }
                ,
                e
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && lt(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.callRef()
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props
                      , n = t.active
                      , a = t.parentMenu
                      , o = t.eventKey;
                    e.active || !n || a && a["scrolled-".concat(o)] ? a && a["scrolled-".concat(o)] && delete a["scrolled-".concat(o)] : this.node && (et()(this.node, K.findDOMNode(a), {
                        onlyScrollIfNeeded: !0
                    }),
                    a["scrolled-".concat(o)] = !0),
                    this.callRef()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props;
                    e.onDestroy && e.onDestroy(e.eventKey)
                }
            }, {
                key: "getPrefixCls",
                value: function() {
                    return "".concat(this.props.rootPrefixCls, "-item")
                }
            }, {
                key: "getActiveClassName",
                value: function() {
                    return "".concat(this.getPrefixCls(), "-active")
                }
            }, {
                key: "getSelectedClassName",
                value: function() {
                    return "".concat(this.getPrefixCls(), "-selected")
                }
            }, {
                key: "getDisabledClassName",
                value: function() {
                    return "".concat(this.getPrefixCls(), "-disabled")
                }
            }, {
                key: "callRef",
                value: function() {
                    this.props.manualRef && this.props.manualRef(this)
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = at({}, this.props), n = d()(this.getPrefixCls(), t.className, (ot(e = {}, this.getActiveClassName(), !t.disabled && t.active),
                    ot(e, this.getSelectedClassName(), t.isSelected),
                    ot(e, this.getDisabledClassName(), t.disabled),
                    e)), o = at({}, t.attribute, {
                        title: t.title,
                        className: n,
                        role: t.role || "menuitem",
                        "aria-disabled": t.disabled
                    });
                    "option" === t.role ? o = at({}, o, {
                        role: "option",
                        "aria-selected": t.isSelected
                    }) : null !== t.role && "none" !== t.role || (o.role = "none");
                    var r = {
                        onClick: t.disabled ? null : this.onClick,
                        onMouseLeave: t.disabled ? null : this.onMouseLeave,
                        onMouseEnter: t.disabled ? null : this.onMouseEnter
                    }
                      , i = at({}, t.style);
                    "inline" === t.mode && (i.paddingLeft = t.inlineIndent * t.level),
                    V.forEach(function(e) {
                        return delete t[e]
                    });
                    var s = this.props.itemIcon;
                    return "function" === typeof this.props.itemIcon && (s = a.createElement(this.props.itemIcon, this.props)),
                    a.createElement("li", Object.assign({}, t, o, r, {
                        style: i,
                        ref: this.saveNode
                    }), t.children, s)
                }
            }]) && rt(n.prototype, o),
            r && rt(n, r),
            t
        }();
        ct.isMenuItem = !0,
        ct.defaultProps = {
            onSelect: D,
            onMouseEnter: D,
            onMouseLeave: D,
            manualRef: D
        };
        var ut = Object(o.connect)(function(e, t) {
            var n = e.activeKey
              , a = e.selectedKeys
              , o = t.eventKey;
            return {
                active: n[t.subMenuKey] === o,
                isSelected: -1 !== a.indexOf(o)
            }
        })(ct);
        function dt(e) {
            return (dt = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function pt() {
            return (pt = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ft(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function ht(e, t) {
            return !t || "object" !== dt(t) && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function mt(e) {
            return (mt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function vt(e, t) {
            return (vt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var yt = function(e) {
            function t() {
                var e;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                (e = ht(this, mt(t).apply(this, arguments))).renderInnerMenuItem = function(t) {
                    var n = e.props;
                    return (0,
                    n.renderMenuItem)(t, n.index, e.props.subMenuKey)
                }
                ,
                e
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && vt(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "render",
                value: function() {
                    var e = pt({}, this.props)
                      , t = e.className
                      , n = void 0 === t ? "" : t
                      , o = e.rootPrefixCls
                      , r = "".concat(o, "-item-group-title")
                      , i = "".concat(o, "-item-group-list")
                      , s = e.title
                      , l = e.children;
                    return V.forEach(function(t) {
                        return delete e[t]
                    }),
                    delete e.onClick,
                    a.createElement("li", Object.assign({}, e, {
                        className: "".concat(n, " ").concat(o, "-item-group")
                    }), a.createElement("div", {
                        className: r,
                        title: "string" === typeof s ? s : void 0
                    }, s), a.createElement("ul", {
                        className: i
                    }, a.Children.map(l, this.renderInnerMenuItem)))
                }
            }]) && ft(n.prototype, o),
            r && ft(n, r),
            t
        }();
        yt.isMenuItemGroup = !0,
        yt.defaultProps = {
            disabled: !0
        };
        var bt = yt
          , gt = function(e) {
            var t = e.className
              , n = e.rootPrefixCls
              , o = e.style;
            return a.createElement("li", {
                className: "".concat(t, " ").concat(n, "-item-divider"),
                style: o
            })
        };
        gt.defaultProps = {
            disabled: !0,
            className: "",
            style: {}
        };
        var kt = gt;
        n.d(t, "d", function() {
            return ie
        }),
        n.d(t, "b", function() {
            return ut
        }),
        n.d(t, "c", function() {
            return bt
        }),
        n.d(t, "a", function() {
            return kt
        });
        t.e = qe
    },
    582: function(e, t, n) {
        "use strict";
        var a = n(575)
          , o = n(576)
          , r = n(578)
          , i = n(579)
          , s = n(577)
          , l = n(0)
          , c = n.n(l);
        n(594);
        function u(e) {
            return function() {
                var t, n = Object(s.a)(e);
                if (function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var a = Object(s.a)(this).constructor;
                    t = Reflect.construct(n, arguments, a)
                } else
                    t = n.apply(this, arguments);
                return Object(i.a)(this, t)
            }
        }
        var d = function(e) {
            Object(r.a)(n, e);
            var t = u(n);
            function n() {
                return Object(a.a)(this, n),
                t.apply(this, arguments)
            }
            return Object(o.a)(n, [{
                key: "render",
                value: function() {
                    var e = this.props;
                    return c.a.createElement("div", {
                        className: ["ms-button", function() {
                            var t = "";
                            return t += "ms-btn-type-" + e.type,
                            t += " ms-btn-size-" + e.size,
                            e.round && (t += " ms-btn-round"),
                            e.round15 && (t += " ms-btn-round15"),
                            e.disabled && (t += " ms-btn-disabled"),
                            t
                        }()].join(" "),
                        onClick: e.disabled ? void 0 : this.props.onClick,
                        style: Object.assign({
                            width: e.width ? parseInt(e.width) + "px" : "auto",
                            height: e.height ? parseInt(e.height) + "px" : "auto",
                            fontSize: e.fontSize ? parseInt(e.fontSize) + "px!important" : "auto",
                            lineHeight: e.lineHeight ? e.lineHeight + "px!important" : "auto"
                        }, this.props.style)
                    }, c.a.createElement("span", null, this.props.children))
                }
            }]),
            n
        }(c.a.Component);
        d.defaultProps = {
            size: "medium",
            type: "default",
            plain: !1,
            round: !1,
            round15: !1,
            disabled: !1,
            width: "",
            height: "",
            lineHeight: "",
            fontSize: ""
        },
        t.a = d
    },
    583: function(e, t) {
        e.exports = function(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    584: function(e, t) {
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        e.exports = function(e, t, a) {
            return t && n(e.prototype, t),
            a && n(e, a),
            e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    585: function(e, t, n) {
        var a = n(831).default;
        function o() {
            if ("function" !== typeof WeakMap)
                return null;
            var e = new WeakMap;
            return o = function() {
                return e
            }
            ,
            e
        }
        e.exports = function(e) {
            if (e && e.__esModule)
                return e;
            if (null === e || "object" !== a(e) && "function" !== typeof e)
                return {
                    default: e
                };
            var t = o();
            if (t && t.has(e))
                return t.get(e);
            var n = {}
              , r = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (Object.prototype.hasOwnProperty.call(e, i)) {
                    var s = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                    s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = e[i]
                }
            return n.default = e,
            t && t.set(e, n),
            n
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    586: function(e, t, n) {
        var a = n(831).default
          , o = n(587);
        e.exports = function(e, t) {
            return !t || "object" !== a(t) && "function" !== typeof t ? o(e) : t
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    587: function(e, t) {
        e.exports = function(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    588: function(e, t) {
        function n(t) {
            return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0,
            n(t)
        }
        e.exports = n,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    589: function(e, t, n) {
        var a = n(1002);
        e.exports = function(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && a(e, t)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    590: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.storeShape = void 0;
        var a, o = n(2), r = (a = o) && a.__esModule ? a : {
            default: a
        };
        t.storeShape = r.default.shape({
            subscribe: r.default.func.isRequired,
            setState: r.default.func.isRequired,
            getState: r.default.func.isRequired
        })
    },
    591: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    594: function(e, t, n) {},
    595: function(e, t, n) {},
    596: function(e, t, n) {},
    597: function(e, t, n) {
        "use strict";
        var a = n(607)
          , o = n(67)
          , r = n(68)
          , i = n(70)
          , s = n(69)
          , l = n(71)
          , c = n(0)
          , u = n.n(c)
          , d = (n(595),
        n(122))
          , p = n(174)
          , f = n(1324)
          , h = n(84)
          , m = n.n(h)
          , v = n(123)
          , y = n(763)
          , b = n(631)
          , g = (n(632),
        n(596),
        function(e) {
            function t(e) {
                var n;
                return Object(o.a)(this, t),
                (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).handleSubmit = function() {
                    n.state.submitting || n.cropper.getCroppedCanvas().toBlob(function() {
                        var e = Object(v.a)(m.a.mark(function e(t) {
                            return m.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        n.props.onSubmit(t),
                                        n.props.onClose();
                                    case 2:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
                ,
                n.onCropperInit = function(e) {
                    n.cropper = e
                }
                ,
                n.state = {
                    src: null
                },
                n
            }
            return Object(l.a)(t, e),
            Object(r.a)(t, [{
                key: "componentDidMount",
                value: function() {
                    var e = this
                      , t = new FileReader;
                    t.onload = function(t) {
                        var n = t.target.result;
                        e.setState({
                            src: n
                        })
                    }
                    ,
                    t.readAsDataURL(this.props.uploadedImageFile)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.option
                      , a = t.title
                      , o = t.submitBtnName;
                    return u.a.createElement("div", {
                        className: "class-cropper-modal"
                    }, u.a.createElement("div", {
                        className: "modal-center"
                    }, u.a.createElement("div", {
                        className: "class-cropper-header"
                    }, u.a.createElement("p", null, a), u.a.createElement(p.a, {
                        type: "close",
                        onClick: function() {
                            e.props.onClose()
                        }
                    })), this.state.src ? u.a.createElement("div", {
                        className: "modal-panel"
                    }, u.a.createElement("div", {
                        className: "cropper-container-container"
                    }, u.a.createElement("div", {
                        className: "cropper-container"
                    }, u.a.createElement(b.a, {
                        src: this.state.src,
                        className: n.className,
                        onInitialized: this.onCropperInit,
                        viewMode: n.viewMode,
                        zoomable: n.zoomable,
                        aspectRatio: n.aspectRatio,
                        guides: n.guides,
                        preview: ".cropper-preview",
                        minCropBoxHeight: n.minCropBoxHeight,
                        minCropBoxWidth: n.minCropBoxWidth
                    })))) : "", u.a.createElement("div", {
                        className: "submit-button",
                        onClick: this.handleSubmit
                    }, u.a.createElement(y.a, {
                        type: "primary"
                    }, o))))
                }
            }]),
            t
        }(c.Component))
          , k = function(e) {
            function t(e) {
                var n;
                return Object(o.a)(this, t),
                (n = Object(i.a)(this, Object(s.a)(t).call(this, e))).beforeUpload = function(e) {
                    return !1
                }
                ,
                n.handleGetResultImgUrl = function(e) {
                    var t = n.state.uploadObj
                      , a = new File([e],n.randomString(20) + ".png",{
                        type: "image/png"
                    });
                    t.file = a,
                    n.setState({
                        uploadObj: t
                    }),
                    n.getBase64(e, function() {}).then(function(e) {
                        n.setState({
                            imgUrl: e
                        }),
                        t.base64 = e,
                        n.setState({
                            uploadObj: t
                        }),
                        n.props.getPicInfo(n.state.uploadObj)
                    })
                }
                ,
                n.judgeFileSizeStandard = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5
                      , n = e.size / 1024 / 1024 < t;
                    return n || d.a.error("\u4e0a\u4f20\u7684\u56fe\u7247\u5927\u5c0f\u5fc5\u987b\u5c0f\u4e8e ".concat(t, "MB!")),
                    n
                }
                ,
                n.state = {
                    classModalVisible: !1,
                    imgUrl: "",
                    uploadObj: {
                        file: "",
                        base64: ""
                    }
                },
                n
            }
            return Object(l.a)(t, e),
            Object(r.a)(t, [{
                key: "onChange",
                value: function(e) {
                    var t = this;
                    if (this.judgeFileSizeStandard(e.file, this.props.maxSize))
                        if (this.props.needCut)
                            this.setState({
                                classModalFile: e.file
                            }, function() {
                                t.setState({
                                    classModalVisible: !0
                                })
                            });
                        else {
                            var n = this.state.uploadObj;
                            this.getBase64(e, function() {}).then(function(a) {
                                t.setState({
                                    imgUrl: a
                                }),
                                n.base64 = a,
                                n.file = e.file,
                                t.setState({
                                    uploadObj: n
                                }),
                                t.props.getPicInfo(t.state.uploadObj)
                            })
                        }
                }
            }, {
                key: "randomString",
                value: function(e) {
                    var t;
                    e = e || 32;
                    var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
                      , a = n.length
                      , o = "";
                    for (t = 0; t < e; t++)
                        o += n.charAt(Math.floor(Math.random() * a));
                    return o
                }
            }, {
                key: "getBase64",
                value: function(e, t) {
                    var n = new FileReader;
                    return e = e.file ? e.file : e,
                    n.readAsDataURL(e),
                    new Promise(function(e) {
                        n.addEventListener("load", function() {
                            return t(e(n.result))
                        })
                    }
                    )
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this, n = this.state, o = n.classModalVisible, r = n.classModalFile, i = u.a.createElement("div", {
                        className: "uploadButton"
                    }, u.a.createElement(p.a, {
                        type: this.state.loading ? "loading" : "plus"
                    }), u.a.createElement("p", null, "upload")), s = u.a.createElement("div", {
                        className: "imgBox"
                    }, u.a.createElement("img", {
                        src: this.state.imgUrl,
                        alt: ""
                    }));
                    return u.a.createElement("div", {
                        className: ""
                    }, u.a.createElement(f.a, (e = {
                        name: "goods",
                        listType: this.props.listType ? this.props.listType : "picture-card",
                        showUploadList: "false",
                        className: "picUpload",
                        action: "",
                        beforeUpload: this.beforeUpload,
                        onChange: this.onChange.bind(this)
                    },
                    Object(a.a)(e, "showUploadList", !1),
                    Object(a.a)(e, "accept", ".png,.jpg,.jpeg,.gif"),
                    e), this.props.children, !this.props.children && ("" == this.state.imgUrl ? i : s)), o && u.a.createElement(g, {
                        uploadedImageFile: r,
                        onClose: function() {
                            t.setState({
                                classModalVisible: !1,
                                editClassModalVisible: !1
                            })
                        },
                        onSubmit: this.handleGetResultImgUrl,
                        option: this.props.cropperOption,
                        title: this.props.cropperTitle,
                        submitBtnName: this.props.cropperSubmitBtnName,
                        visible: o
                    }))
                }
            }]),
            t
        }(c.Component);
        t.a = k
    },
    598: function(e, t, n) {
        e.exports = n.p + "static/media/bg_message_empty.8615869d.png"
    },
    599: function(e, t, n) {
        "use strict";
        var a = n(124)
          , o = n.n(a)
          , r = n(177)
          , i = n(575)
          , s = n(576)
          , l = n(622)
          , c = n(578)
          , u = n(579)
          , d = n(577)
          , p = n(0)
          , f = n.n(p)
          , h = (n(600),
        n(175))
          , m = n(1329)
          , v = n(1323)
          , y = n(122)
          , b = n(1306)
          , g = n(684)
          , k = n(1307)
          , S = n(1325)
          , E = n(12)
          , A = (n(591),
        n(601))
          , w = n.n(A)
          , C = n(598)
          , O = n.n(C)
          , T = n(602)
          , P = n.n(T)
          , I = n(604)
          , N = n(582)
          , x = n(597);
        function M(e) {
            return function() {
                var t, n = Object(d.a)(e);
                if (function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct)
                        return !1;
                    if (Reflect.construct.sham)
                        return !1;
                    if ("function" === typeof Proxy)
                        return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                        !0
                    } catch (e) {
                        return !1
                    }
                }()) {
                    var a = Object(d.a)(this).constructor;
                    t = Reflect.construct(n, arguments, a)
                } else
                    t = n.apply(this, arguments);
                return Object(u.a)(this, t)
            }
        }
        m.a.Search;
        var D = 1
          , j = ["", "\u5b66\u7c4d", "\u8bfe\u7a0b", "\u76f4\u64ad", "\u4efb\u52a1", "\u8003\u8bd5", "\u6bd5\u4e1a", "\u793e\u533a"]
          , R = [2, 3, 4, 7]
          , L = ["/message"]
          , V = ["/studyStatus"]
          , F = ["/Index", "/index", "studyPlay", "/study/taskDetail", "/video", "/coursePage", "/studyPlan", "/courseBrief"]
          , B = ["/task", "/task/taskDetail", "/task/taskAnswer"]
          , U = ["/live", "/liveVideo"]
          , K = ["/exam"]
          , Q = ["/graduate"]
          , z = ["/community", "/community/ThemeDetail", "/community/myHomePage", "/community/otherHomePage"]
          , G = 150
          , J = function(e) {
            Object(c.a)(n, e);
            var t = M(n);
            function n() {
                var e;
                Object(i.a)(this, n);
                for (var a = arguments.length, s = new Array(a), c = 0; c < a; c++)
                    s[c] = arguments[c];
                return (e = t.call.apply(t, [this].concat(s))).state = {
                    avatarUrl: "./imgs/default@2x.png",
                    visible: !1,
                    showBtn: !1,
                    loading: !1,
                    firstUpdateUnreadMessage: !0,
                    tabIndex: D,
                    changePwdVisible: !1,
                    changePersonalDataVisible: !1,
                    logoutVisible: !1,
                    messageVisible: !1,
                    updateUnreadMessageInterval: 6e4,
                    originPwd: "",
                    newPwd: "",
                    repeatNewPwd: "",
                    messageCount: 0,
                    messageArr: [],
                    personalData: {
                        id: "",
                        name: "\u5f20\u8001\u5e08",
                        nickname: "\u5c0f\u732a",
                        avatarUrl: ""
                    },
                    personalDataBack: {},
                    tempAvatarUrl: "",
                    phoneEditVisible: !1,
                    originPhone: "",
                    newPhoneObj: {
                        phone: "",
                        autoCode: ""
                    },
                    autoCodeCountDown: G,
                    timer: "",
                    checkoutPhoneMsg: "",
                    isGetAutoCode: 0
                },
                e.initPersonalData = function() {
                    var t = JSON.parse(localStorage.getItem("pcUserInfo"));
                    t.avatarUrl = JSON.parse(localStorage.getItem("pcUserInfo")).avatarUrl || "./imgs/default@2x.png",
                    e.setState({
                        originPhone: t.phone,
                        personalData: {
                            id: t.id,
                            nickname: t.nickname,
                            avatarUrl: t.avatarUrl,
                            name: t.name
                        }
                    })
                }
                ,
                e.cancelPersonalData = function() {
                    JSON.stringify(e.state.personalData) != JSON.stringify(e.state.personalDataBack) ? (0,
                    v.a.confirm)({
                        title: "\u63d0\u793a",
                        content: "\u5f53\u524d\u5185\u5bb9\u8fd8\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u53d6\u6d88\u5417?",
                        okText: "\u786e\u8ba4",
                        okButtonProps: {
                            props: {
                                disabled: !0
                            }
                        },
                        cancelText: "\u53d6\u6d88",
                        onOk: function() {
                            e.initPersonalData(),
                            e.setState({
                                changePersonalDataVisible: !1
                            })
                        },
                        onCancel: function() {}
                    }) : e.setState({
                        changePersonalDataVisible: !1
                    })
                }
                ,
                e.uploadPersonalData = function() {
                    var t = Object(r.a)(o.a.mark(function t(n) {
                        var a, r, i;
                        return o.a.wrap(function(t) {
                            for (; ; )
                                switch (t.prev = t.next) {
                                case 0:
                                    return (a = {}).id = e.state.personalData.id,
                                    a.name = e.state.personalData.name,
                                    a.nickname = "" == e.state.personalData.nickname ? null : e.state.personalData.nickname,
                                    n && (a.avatarUrl = n),
                                    t.next = 8,
                                    h.a.axiosData("post", "/yunkai/h5/admin/studentinfo/edit", a);
                                case 8:
                                    "REQ001" === t.sent.code && (y.a.success("\u4fee\u6539\u6210\u529f"),
                                    (r = e.state.personalData).avatarUrl = e.state.tempAvatarUrl,
                                    e.setState({
                                        changePersonalDataVisible: !1,
                                        personalData: r
                                    }),
                                    (i = JSON.parse(localStorage.getItem("pcUserInfo"))).nickname = e.state.personalData.nickname,
                                    n && (i.avatarUrl = n),
                                    localStorage.setItem("pcUserInfo", JSON.stringify(i)));
                                case 10:
                                case "end":
                                    return t.stop()
                                }
                        }, t)
                    }));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                e.uploadFile = Object(r.a)(o.a.mark(function t() {
                    var n, a;
                    return o.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (e.state.personalData.file) {
                                    t.next = 3;
                                    break
                                }
                                return e.uploadPersonalData(),
                                t.abrupt("return");
                            case 3:
                                return (n = new FormData).append("file", e.state.personalData.file),
                                t.next = 7,
                                h.a.axiosData("post", "/yunkai/file/upload", n);
                            case 7:
                                "REQ001" === (a = t.sent).code && e.uploadPersonalData(a.data.fullPath);
                            case 9:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                e.submitPersonalData = function() {
                    e.uploadFile()
                }
                ,
                e.clearCountDown = function() {
                    e.setState({
                        autoCodeCountDown: G,
                        timer: null
                    }),
                    clearInterval(e.state.timer)
                }
                ,
                e.getPhoneAutoCode_btn_click = Object(r.a)(o.a.mark(function t() {
                    var n, a, i, s, c;
                    return o.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (i = function() {
                                    return new Promise(function() {
                                        var e = Object(r.a)(o.a.mark(function e(t, a) {
                                            return o.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        h.a.axiosData("post", "/yunkai/freetrial/sys/validCode/get", {
                                                            phone: n.state.newPhoneObj.phone,
                                                            validType: "BIND_PHONE"
                                                        });
                                                    case 2:
                                                        "REQ001" === e.sent.code ? t(!0) : t(!1);
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                                ,
                                a = function() {
                                    return new Promise(function() {
                                        var e = Object(r.a)(o.a.mark(function e(t, a) {
                                            var r;
                                            return o.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        h.a.axiosData("post", "/yunkai/h5/admin/studentinfo/checkphone", {
                                                            phone: n.state.newPhoneObj.phone
                                                        }, !1);
                                                    case 2:
                                                        "REQ001" === (r = e.sent).code ? (n.setState({
                                                            isGetAutoCode: 1
                                                        }),
                                                        t(!0)) : (t(!1),
                                                        n.setState({
                                                            checkoutPhoneMsg: r.msg
                                                        }));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }())
                                }
                                ,
                                n = Object(l.a)(e),
                                !e.state.timer) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return");
                            case 5:
                                if (s = function() {
                                    e.setState({
                                        autoCodeCountDown: e.state.autoCodeCountDown - 1
                                    }),
                                    e.state.timer = setInterval(function() {
                                        e.setState({
                                            autoCodeCountDown: e.state.autoCodeCountDown - 1
                                        }, function() {
                                            0 == e.state.autoCodeCountDown && (clearInterval(e.state.timer),
                                            e.setState({
                                                timer: null
                                            }))
                                        })
                                    }, 1e3)
                                }
                                ,
                                c = new RegExp(/^1\d{10}$/),
                                c.test(e.state.newPhoneObj.phone)) {
                                    t.next = 11;
                                    break
                                }
                                return e.setState({
                                    checkoutPhoneMsg: "\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u624b\u673a\u683c\u5f0f"
                                }),
                                t.abrupt("return");
                            case 11:
                                return e.setState({
                                    checkoutPhoneMsg: "",
                                    autoCodeCountDown: G
                                }),
                                t.next = 14,
                                a();
                            case 14:
                                if (t.sent) {
                                    t.next = 17;
                                    break
                                }
                                return t.abrupt("return");
                            case 17:
                                return t.next = 19,
                                i();
                            case 19:
                                t.sent,
                                s();
                            case 21:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                e.cancelUploadPhone = function() {
                    e.state.newPhoneObj.phone || e.state.newPhoneObj.autoCode ? (0,
                    v.a.confirm)({
                        title: "\u63d0\u793a",
                        content: "\u5f53\u524d\u5185\u5bb9\u8fd8\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u53d6\u6d88\u5417?",
                        okText: "\u786e\u8ba4",
                        okButtonProps: {
                            props: {
                                disabled: !0
                            }
                        },
                        cancelText: "\u53d6\u6d88",
                        onOk: function() {
                            e.setState({
                                phoneEditVisible: !1
                            })
                        },
                        onCancel: function() {}
                    }) : e.setState({
                        phoneEditVisible: !1
                    })
                }
                ,
                e.initPhoneDialog = function() {
                    e.timer && clearInterval(e.timer),
                    e.setState({
                        checkoutPhoneMsg: "",
                        timer: null
                    })
                }
                ,
                e.submitUploadPhone = Object(r.a)(o.a.mark(function t() {
                    return o.a.wrap(function(t) {
                        for (; ; )
                            switch (t.prev = t.next) {
                            case 0:
                                if (window.trackEvent("Ch-phone", "\u5728\u4fee\u6539\u624b\u673a\u53f7\u5f39\u7a97\u4e2d\u70b9\u51fb\u3010\u786e\u8ba4\u3011"),
                                !(e.state.checkoutPhoneMsg || e.state.newPhoneObj.phone.length < 11 || e.state.newPhoneObj.autoCode.length < 4)) {
                                    t.next = 3;
                                    break
                                }
                                return t.abrupt("return");
                            case 3:
                                return t.next = 5,
                                h.a.axiosData("post", "/yunkai/h5/admin/studentinfo/editphone", {
                                    phone: e.state.newPhoneObj.phone,
                                    id: e.state.personalData.id,
                                    code: e.state.newPhoneObj.autoCode,
                                    status: e.state.isGetAutoCode
                                });
                            case 5:
                                "REQ001" === t.sent.code && (y.a.warn("\u624b\u673a\u53f7\u7801\u4fee\u6539\u6210\u529f\uff0c\u5373\u5c06\u91cd\u65b0\u767b\u5f55\u3002"),
                                e.clearCountDown(),
                                e.setState({
                                    phoneEditVisible: !1
                                }),
                                window.setTimeout(function() {
                                    e.realLogout()
                                }, 2e3));
                            case 7:
                            case "end":
                                return t.stop()
                            }
                    }, t)
                })),
                e.showBtnList = function() {
                    e.setState({
                        showBtn: !0
                    })
                }
                ,
                e.hideBtnList = function() {
                    e.setState({
                        showBtn: !1
                    })
                }
                ,
                e
            }
            return Object(s.a)(n, [{
                key: "componentWillMount",
                value: function() {
                    if (localStorage.getItem("pcUserInfo")) {
                        this.setState({
                            avatarUrl: JSON.parse(localStorage.getItem("pcUserInfo")).avatarUrl || "./imgs/default@2x.png"
                        }),
                        this.initPersonalData()
                    }
                    this.findCurrentTabIndex(),
                    this.getUnreadCount()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e = this;
                    this.updateUnreadInterval = setInterval(function() {
                        e.getUnreadCount()
                    }, this.state.updateUnreadMessageInterval)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.updateUnreadInterval && clearInterval(this.updateUnreadInterval),
                    this.timer && clearInterval(this.timer)
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {}
            }, {
                key: "addNotification",
                value: function(e) {
                    b.a.open({
                        message: e.titleName,
                        description: e.content,
                        placement: "bottomRight",
                        duration: 10,
                        style: {
                            width: 600,
                            marginLeft: -265
                        }
                    })
                }
            }, {
                key: "findCurrentTabIndex",
                value: function() {
                    var e = this.props.location.pathname;
                    this.findTab(L, -1, e, !1) || this.findTab(V, D, e, !0) || this.findTab(F, 2, e, !0) || this.findTab(B, 4, e, !0) || this.findTab(U, 3, e, !0) || this.findTab(K, 5, e, !0) || this.findTab(Q, 6, e, !0) || this.findTab(z, 7, e, !0)
                }
            }, {
                key: "findTab",
                value: function(e, t, n, a) {
                    for (var o = 0; o < e.length; o++) {
                        if (e[o] === n) {
                            if (a)
                                this.setState({
                                    tabIndex: t
                                }),
                                localStorage.setItem("headerIndex", t);
                            else {
                                var r = localStorage.getItem("headerIndex");
                                r && r >= 0 && this.setState({
                                    tabIndex: Object(I.toInteger)(r)
                                })
                            }
                            return !0
                        }
                    }
                    return !1
                }
            }, {
                key: "handleVisibleChange",
                value: function(e) {
                    this.setState({
                        visible: e
                    })
                }
            }, {
                key: "clickLogout",
                value: function() {
                    this.setState({
                        visible: !1,
                        logoutVisible: !0
                    })
                }
            }, {
                key: "clickChangePwd",
                value: function() {
                    this.setState({
                        visible: !1,
                        changePwdVisible: !0
                    })
                }
            }, {
                key: "clickToMyHomePage",
                value: function() {
                    this.props.history.push({
                        pathname: "/community/myHomePage"
                    }),
                    localStorage.setItem("homePageActiveIndex", "1")
                }
            }, {
                key: "clickPersonalData",
                value: function() {
                    this.setState({
                        personalDataBack: JSON.parse(JSON.stringify(this.state.personalData)),
                        visible: !1,
                        tempAvatarUrl: JSON.parse(JSON.stringify(this.state.personalData)).avatarUrl,
                        changePersonalDataVisible: !0
                    })
                }
            }, {
                key: "clickHomePage",
                value: function() {
                    this.props.history.push({
                        pathname: "/myHome"
                    })
                }
            }, {
                key: "submitChangePwd",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e() {
                        var t = this;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (window.trackEvent("Ch-password", "\u5728\u4fee\u6539\u5bc6\u7801\u5f39\u7a97\u4e2d\u70b9\u51fb\u3010\u786e\u5b9a\u3011"),
                                    !this.canSubmitChangePwd()) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 4,
                                    h.a.axiosData("post", "/yunkai/sys/identification/updatepassword", {
                                        oldPasswd: this.state.originPwd,
                                        newPasswd: this.state.newPwd,
                                        confirmPasswd: this.state.repeatNewPwd
                                    });
                                case 4:
                                    if ("REQ001" !== e.sent.code) {
                                        e.next = 10;
                                        break
                                    }
                                    y.a.warn("\u4fee\u6539\u6210\u529f\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\uff01"),
                                    window.setTimeout(function() {
                                        t.realLogout()
                                    }, 2e3),
                                    e.next = 11;
                                    break;
                                case 10:
                                    return e.abrupt("return");
                                case 11:
                                    this.setState({
                                        changePwdVisible: !1
                                    });
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "handleCancelChangePwd",
                value: function() {
                    var e = this;
                    (0,
                    v.a.confirm)({
                        title: "\u63d0\u793a",
                        content: "\u5f53\u524d\u5185\u5bb9\u8fd8\u672a\u4fdd\u5b58\uff0c\u786e\u5b9a\u53d6\u6d88\u5417?",
                        okText: "\u786e\u8ba4",
                        okButtonProps: {
                            props: {
                                disabled: !0
                            }
                        },
                        cancelText: "\u53d6\u6d88",
                        onOk: function() {
                            e.setState({
                                changePwdVisible: !1
                            })
                        },
                        onCancel: function() {}
                    })
                }
            }, {
                key: "submitLogout",
                value: function() {
                    this.setState({
                        logoutVisible: !1
                    }),
                    this.realLogout()
                }
            }, {
                key: "cancelLogout",
                value: function() {
                    this.setState({
                        logoutVisible: !1
                    })
                }
            }, {
                key: "clickMessage",
                value: function() {
                    this.getUnreadCount(),
                    this.showMessageModal(!0)
                }
            }, {
                key: "getUnreadCount",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e() {
                        var t, n, a, r;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.a.axiosData("post", "/yunkai/admin/msg/detail/unReadCount", {});
                                case 2:
                                    if ("REQ001" !== (t = e.sent).code) {
                                        e.next = 11;
                                        break
                                    }
                                    if (this.state.firstUpdateUnreadMessage || !(t.data > this.state.messageCount)) {
                                        e.next = 10;
                                        break
                                    }
                                    return n = t.data - this.state.messageCount,
                                    e.next = 8,
                                    h.a.axiosData("post", "/yunkai/admin/msg/detail/listPage", {
                                        page: 1,
                                        rows: n
                                    });
                                case 8:
                                    if ("REQ001" === e.sent.code && t.data.recordList)
                                        for (a = 0; a < t.data.recordList.length; a++)
                                            r = t.data.recordList[a],
                                            this.addNotification(r);
                                case 10:
                                    this.setState({
                                        messageCount: t.data,
                                        firstUpdateUnreadMessage: !1
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "showMessageModal",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e(t) {
                        var n;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.a.axiosData("post", "/yunkai/admin/msg/detail/listPage", {
                                        page: 1,
                                        rows: 5
                                    });
                                case 2:
                                    "REQ001" === (n = e.sent).code && (t ? this.setState({
                                        messageArr: n.data.recordList,
                                        messageVisible: !0
                                    }) : this.setState({
                                        messageArr: n.data.recordList
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "cancelMessage",
                value: function() {
                    this.setState({
                        messageVisible: !1
                    })
                }
            }, {
                key: "realLogout",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.a.axiosData("post", "/yunkai/sys/identification/logout", {});
                                case 2:
                                    localStorage.removeItem("token"),
                                    localStorage.removeItem("pcUserInfo"),
                                    window.token = "",
                                    window.hasClick = !1,
                                    this.props.history.push({
                                        pathname: "/login"
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "canSubmitChangePwd",
                value: function() {
                    return this.state.originPwd.length > 0 && this.state.repeatNewPwd.length > 0 && this.state.newPwd.length > 0
                }
            }, {
                key: "getAvatar",
                value: function() {
                    var e = localStorage.getItem("pcUserInfo")
                      , t = JSON.parse(e);
                    return t.avatarUrl ? f.a.createElement("img", {
                        width: "100%",
                        height: "100%",
                        alt: "\u8fd9\u91cc\u662f\u4e00\u5f20\u56fe\u7247",
                        src: this.state.personalData.avatarUrl
                    }) : t && t.name && t.name.length > 0 ? t.name[0] : void 0
                }
            }, {
                key: "changeTab",
                value: function(e) {
                    var t = "";
                    switch (e) {
                    case D:
                        t = "/studyStatus";
                        break;
                    case 2:
                        t = "/index",
                        window.hasClick = !1;
                        break;
                    case 4:
                        t = "/task";
                        break;
                    case 3:
                        t = "/live";
                        break;
                    case 5:
                        t = "/exam";
                        break;
                    case 6:
                        t = "/graduate";
                        break;
                    case 7:
                        t = "/community"
                    }
                    this.props.history.push({
                        pathname: t
                    })
                }
            }, {
                key: "getTabClassName",
                value: function(e) {
                    return this.state.tabIndex === e ? "main-tab-item-select active-tab" : "main-tab-item inactive-tab"
                }
            }, {
                key: "getCountClassName",
                value: function() {
                    return this.state.messageCount < 10 ? "count-wrap-small" : this.state.messageCount < 100 ? "count-wrap" : "count-wrap-big"
                }
            }, {
                key: "getTabName",
                value: function(e) {
                    return j[e]
                }
            }, {
                key: "markAllMessageRead",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    h.a.axiosData("post", "/yunkai/admin/msg/detail/becomeReaded", {
                                        allBecomRead: 1
                                    });
                                case 2:
                                    "REQ001" === e.sent.code && this.showMessageModal(!1);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "toFindPwd",
                value: function() {
                    this.props.history.push({
                        pathname: "/login",
                        query: {
                            findPwd: !0
                        }
                    })
                }
            }, {
                key: "clickMessageItem",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e(t) {
                        var n, a, r, i, s, l, c, u, d;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (1 === t.readFlag) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3,
                                    h.a.axiosData("post", "/yunkai/admin/msg/detail/becomeReaded", {
                                        id: t.id,
                                        readSource: 2
                                    });
                                case 3:
                                    if (1 === t.businessType && (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    n = t.courseResourceId,
                                    a = JSON.stringify({
                                        courseResourceId: n
                                    }),
                                    window.getChapterSectionList = null,
                                    window.localStorage.setItem("coursePageSearchData", a),
                                    window.studyCoursePage_itemIndex = 0,
                                    this.props.history.push({
                                        pathname: "/coursePage",
                                        query: {
                                            tabType: 1
                                        },
                                        search: "time=" + new Date
                                    })),
                                    2 !== t.businessType) {
                                        e.next = 18;
                                        break
                                    }
                                    if (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    window.trackEvent("Task", "\u5728\u6d88\u606f\u901a\u77e5-\u70b9\u51fb\u672a\u5b8c\u6210\u4e14\u672a\u4e0b\u67b6/\u5220\u9664\u7684\u4efb\u52a1\u901a\u77e5"),
                                    1 !== t.taskType) {
                                        e.next = 14;
                                        break
                                    }
                                    this.props.history.push({
                                        pathname: "/task/taskDetail",
                                        query: {
                                            taskId: t.taskId,
                                            time: new Date
                                        },
                                        search: "taskId=" + t.taskId
                                    }),
                                    e.next = 18;
                                    break;
                                case 14:
                                    return e.next = 16,
                                    h.a.axiosData("post", "/yunkai/web/student/task/info", {
                                        taskId: t.taskId
                                    });
                                case 16:
                                    (r = e.sent) && "REQ001" === r.code && r.data && (i = r.data,
                                    localStorage.setItem("answerFormPath", "coursePage"),
                                    localStorage.setItem("taskId", i.taskId),
                                    null != t.courseResourceId && (s = t.courseResourceId,
                                    l = JSON.stringify({
                                        courseResourceId: s
                                    }),
                                    localStorage.setItem("coursePageSearchData", l)),
                                    i.status < 1 ? (c = "/task/taskAnswer?token=".concat(localStorage.getItem("token"), "&id=").concat(i.examId, "&subjectId=").concat(i.subjectId, "&taskId=").concat(i.taskId, "&examUserId=").concat(i.examUserId),
                                    window.localStorage.setItem("hasRedirectAnswer", c),
                                    window.sessionStorage.setItem("answerBack", "answerBack"),
                                    this.props.history.push({
                                        pathname: c
                                    }),
                                    window.location.reload()) : (u = "/task/taskAnswer?token=".concat(localStorage.getItem("token"), "&id=").concat(i.examId, "&subjectId=").concat(i.subjectId, "&taskId=").concat(i.taskId, "&examUserId=").concat(i.examUserId, "&repeat="),
                                    window.localStorage.setItem("hasRedirectAnswer", u),
                                    this.props.history.push({
                                        pathname: u
                                    }),
                                    window.location.reload()));
                                case 18:
                                    3 === t.businessType && (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    d = (new Date).getTime(),
                                    this.props.history.push({
                                        pathname: "/index",
                                        query: {
                                            businessId: t.businessId,
                                            time: d
                                        },
                                        search: "businessId=" + t.businessId + "&time=" + d
                                    })),
                                    4 === t.businessType && (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    this.props.history.push({
                                        pathname: "/myHome"
                                    })),
                                    5 === t.businessType && (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    (new Date).getTime(),
                                    this.props.history.push({
                                        pathname: "/index"
                                    })),
                                    6 === t.businessType && (this.cancelMessage(),
                                    this.getUnreadCount(),
                                    this.showMessageModal(!1),
                                    (new Date).getTime(),
                                    this.props.history.push({
                                        pathname: "/graduate",
                                        search: "businessId=" + t.businessId
                                    }));
                                case 22:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "allMessageRead",
                value: function() {
                    for (var e = 0; e < this.state.messageArr.length; e++) {
                        if (1 != this.state.messageArr[e].readFlag)
                            return !0
                    }
                    return !1
                }
            }, {
                key: "toMessagePage",
                value: function() {
                    this.props.history.push({
                        pathname: "/message"
                    })
                }
            }, {
                key: "getMessageItem",
                value: function(e, t) {
                    var n = this;
                    return f.a.createElement("div", {
                        className: "message-item-wrap",
                        key: t,
                        onClick: function() {
                            n.clickMessageItem(e)
                        }
                    }, f.a.createElement("div", {
                        className: "message-item-top-wrap"
                    }, f.a.createElement("div", {
                        className: 1 === e.readFlag ? "message-item-dot-place-holder" : "message-item-dot"
                    }), f.a.createElement("div", {
                        className: "message-item-top-title-wrap"
                    }, f.a.createElement("div", {
                        className: "message-item-title"
                    }, e.titleName), f.a.createElement("div", {
                        className: "message-item-time"
                    }, e.gmtCreate))), f.a.createElement(g.a, {
                        title: e.content
                    }, f.a.createElement("div", {
                        className: "message-item-content"
                    }, e.content)))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    var t = f.a.createElement("div", {
                        className: "addModalFooter"
                    }, f.a.createElement(N.a, {
                        width: "120",
                        plain: !0,
                        round: !0,
                        onClick: this.cancelPersonalData
                    }, "\u53d6\u6d88"), f.a.createElement(N.a, {
                        width: "120",
                        type: "primary",
                        round: !0,
                        onClick: this.submitPersonalData
                    }, "\u4fdd\u5b58"))
                      , n = f.a.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        }
                    }, f.a.createElement("div", {
                        className: "change-pwd-cancel-wrap",
                        key: 0,
                        onClick: this.cancelUploadPhone
                    }, f.a.createElement("div", {
                        className: "change-pwd-cancel"
                    }, "\u53d6\u6d88")), f.a.createElement("div", {
                        className: !this.state.checkoutPhoneMsg && this.state.newPhoneObj.phone.length >= 11 && this.state.newPhoneObj.autoCode.length >= 4 ? "change-pwd-submit-wrap" : "change-pwd-submit-normal-wrap",
                        onClick: this.submitUploadPhone,
                        key: 1
                    }, f.a.createElement("div", {
                        className: "change-pwd-submit"
                    }, "\u786e\u8ba4")));
                    return f.a.createElement("div", {
                        className: "header_box global-box-shadow"
                    }, f.a.createElement("div", {
                        className: "title_content"
                    }, f.a.createElement("div", {
                        style: {
                            height: "40px",
                            display: "flex",
                            alignItems: "center"
                        }
                    }, f.a.createElement("div", {
                        style: {
                            width: "200px",
                            height: "59px"
                        }
                    }, f.a.createElement("img", {
                        width: "auto",
                        height: "46px",
                        style: {
                            marginTop: "7px"
                        },
                        alt: "\u8fd9\u91cc\u662f\u4e00\u5f20\u56fe\u7247",
                        src: window.localStorage.getItem("headerLogo")
                    })), f.a.createElement("div", {
                        className: "inline_block",
                        style: {
                            marginRight: 108
                        }
                    }), f.a.createElement("div", {
                        className: "main-tab"
                    }, R.map(function(t, n) {
                        return f.a.createElement("div", {
                            onClick: function() {
                                e.changeTab(t)
                            },
                            className: e.getTabClassName(t),
                            key: n
                        }, e.getTabName(t))
                    }))), f.a.createElement("div", {
                        className: "inline_block title_right_box"
                    }, f.a.createElement("div", {
                        className: "message-wrap",
                        onClick: function() {
                            e.clickMessage()
                        }
                    }, f.a.createElement("img", {
                        className: "icon",
                        src: w.a,
                        alt: "image"
                    }), this.state.messageCount > 0 ? f.a.createElement("div", {
                        className: this.getCountClassName()
                    }, f.a.createElement("div", {
                        className: "count"
                    }, this.state.messageCount >= 100 ? "..." : this.state.messageCount)) : f.a.createElement("div", null)), f.a.createElement(k.a, {
                        content: f.a.createElement("div", {
                            className: "text-hint-wrap"
                        }, f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                return e.clickHomePage()
                            }
                        }, "\u6211\u7684\u4e3b\u9875"), f.a.createElement("div", {
                            className: "text-hint-divide"
                        }), f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                return e.clickPersonalData()
                            }
                        }, "\u4e2a\u4eba\u8d44\u6599"), f.a.createElement("div", {
                            className: "text-hint-divide"
                        }), f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                return e.clickChangePwd()
                            }
                        }, "\u4fee\u6539\u5bc6\u7801"), f.a.createElement("div", {
                            className: "text-hint-divide"
                        }), f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                e.setState({
                                    phoneEditVisible: !0,
                                    newPhoneObj: {
                                        phone: "",
                                        autoCode: ""
                                    },
                                    checkoutPhoneMsg: ""
                                })
                            }
                        }, "\u4fee\u6539\u624b\u673a\u53f7\u7801"), f.a.createElement("div", {
                            className: "text-hint-divide"
                        }), f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                return e.clickToMyHomePage()
                            }
                        }, "\u6211\u7684\u793e\u533a"), f.a.createElement("div", {
                            className: "text-hint-divide"
                        }), f.a.createElement("a", {
                            className: "text-hint",
                            onClick: function() {
                                return e.clickLogout()
                            }
                        }, "\u9000\u51fa\u767b\u5f55")),
                        trigger: "hover",
                        visible: this.state.visible,
                        onVisibleChange: function(t) {
                            e.handleVisibleChange(t)
                        }
                    }, f.a.createElement("div", {
                        className: "avatar-module"
                    }, f.a.createElement("div", {
                        className: "avatarUrl"
                    }, this.getAvatar()), f.a.createElement("img", {
                        className: "avatar-dot",
                        src: P.a,
                        alt: "image"
                    })))), f.a.createElement("div", {
                        className: "header-message-wrap"
                    }, f.a.createElement(v.a, {
                        centered: !0,
                        width: 400,
                        visible: this.state.messageVisible,
                        closeIcon: f.a.createElement("div", null),
                        onCancel: function() {
                            return e.cancelMessage()
                        },
                        getContainer: function() {
                            return document.getElementsByClassName("header-message-wrap")[0]
                        },
                        footer: this.state.messageArr.length > 0 ? [f.a.createElement("div", {
                            className: "bottom",
                            key: 0
                        }, f.a.createElement("div", {
                            className: "change-pwd-cancel",
                            onClick: function() {
                                return e.toMessagePage()
                            }
                        }, "\u67e5\u770b\u5168\u90e8"))] : null
                    }, f.a.createElement("div", {
                        className: "message-modal-wrap"
                    }, f.a.createElement("div", {
                        className: "title-wrap"
                    }, f.a.createElement("div", {
                        className: "message-title"
                    }, "\u6d88\u606f"), this.allMessageRead() ? f.a.createElement("div", {
                        className: "message-read",
                        onClick: function() {
                            return e.markAllMessageRead()
                        }
                    }, "\u5168\u90e8\u6807\u8bb0\u4e3a\u5df2\u8bfb") : f.a.createElement("div", {
                        className: "message-all-readed"
                    }, "\u5168\u90e8\u5df2\u8bfb")), f.a.createElement("div", null, this.state.messageArr.length > 0 ? this.state.messageArr.map(function(t, n) {
                        return e.getMessageItem(t, n)
                    }) : f.a.createElement("div", {
                        className: "message-empty-wrap"
                    }, f.a.createElement("img", {
                        className: "message-empty-bg",
                        src: O.a,
                        alt: "empty-image"
                    }), f.a.createElement("div", {
                        className: "message-empty-text"
                    }, "\u5f53\u524d\u6ca1\u6709\u6d88\u606f\u54e6~")))))), f.a.createElement("div", {
                        className: "header-logout-modal-wrap"
                    }, f.a.createElement(v.a, {
                        title: "\u5373\u5c06\u9000\u51fa\u767b\u5f55",
                        content: "\u786e\u8ba4\u9000\u51fa?",
                        getContainer: function() {
                            return document.getElementsByClassName("header-logout-modal-wrap")[0]
                        },
                        visible: this.state.logoutVisible,
                        onCancel: function() {
                            return e.cancelLogout()
                        },
                        onOk: function() {
                            return e.submitLogout()
                        }
                    }, f.a.createElement("p", null, "\u786e\u8ba4\u9000\u51fa?"))), f.a.createElement("div", {
                        className: "header-changePwd-modal-wrap"
                    }, f.a.createElement(v.a, {
                        title: "\u4fee\u6539\u5bc6\u7801",
                        centered: !0,
                        visible: this.state.changePwdVisible,
                        onCancel: function() {
                            return e.handleCancelChangePwd()
                        },
                        getContainer: function() {
                            return document.getElementsByClassName("header-changePwd-modal-wrap")[0]
                        },
                        footer: [f.a.createElement("div", {
                            className: "change-pwd-cancel-wrap",
                            key: 0,
                            onClick: function() {
                                e.handleCancelChangePwd()
                            }
                        }, f.a.createElement("div", {
                            className: "change-pwd-cancel"
                        }, "\u53d6\u6d88")), f.a.createElement("div", {
                            className: this.canSubmitChangePwd() ? "change-pwd-submit-wrap" : "change-pwd-submit-normal-wrap",
                            onClick: function() {
                                e.submitChangePwd()
                            },
                            key: 1
                        }, f.a.createElement("div", {
                            className: "change-pwd-submit"
                        }, "\u786e\u8ba4"))]
                    }, f.a.createElement("div", {
                        className: "input-change"
                    }, f.a.createElement("div", {
                        className: "input-change-pwd-wrap"
                    }, f.a.createElement("div", {
                        className: "prefix"
                    }, "*"), f.a.createElement("div", {
                        className: "input-change-pwd"
                    }, f.a.createElement(m.a.Password, {
                        style: {
                            marginTop: "20px"
                        },
                        size: "large",
                        placeholder: "\u8f93\u5165\u539f\u5bc6\u7801",
                        allowClear: !0,
                        onChange: function(t) {
                            return e.setState({
                                originPwd: t.target.value
                            })
                        }
                    }))), f.a.createElement("div", {
                        className: "input-change-pwd-wrap"
                    }, f.a.createElement("div", {
                        className: "prefix"
                    }, "*"), f.a.createElement("div", {
                        className: "input-change-pwd"
                    }, f.a.createElement(m.a.Password, {
                        style: {
                            marginTop: "20px"
                        },
                        size: "large",
                        placeholder: "\u8f93\u5165\u65b0\u5bc6\u7801(\u5bc6\u7801\u9700\u7531\u6570\u5b57\u548c\u5b57\u6bcd\u7ec4\u6210)",
                        allowClear: !0,
                        onChange: function(t) {
                            return e.setState({
                                newPwd: t.target.value
                            })
                        }
                    }))), f.a.createElement("div", {
                        className: "input-change-pwd-wrap"
                    }, f.a.createElement("div", {
                        className: "prefix"
                    }, "*"), f.a.createElement("div", {
                        className: "input-change-pwd"
                    }, f.a.createElement(m.a.Password, {
                        style: {
                            marginTop: "20px"
                        },
                        size: "large",
                        placeholder: "\u518d\u6b21\u8f93\u5165\u65b0\u5bc6\u7801",
                        allowClear: !0,
                        onChange: function(t) {
                            return e.setState({
                                repeatNewPwd: t.target.value
                            })
                        }
                    }))), f.a.createElement("div", {
                        className: "change-pwd-text"
                    }, "\u5982\u679c\u60a8\u5fd8\u8bb0\u5f53\u524d\u5bc6\u7801,\u5efa\u8bae\u901a\u8fc7", f.a.createElement("span", {
                        onClick: function() {
                            e.toFindPwd()
                        }
                    }, "\u627e\u56de\u5bc6\u7801"), "\u6765\u4fee\u6539\u5bc6\u7801!")))), f.a.createElement("div", {
                        className: ""
                    }, f.a.createElement(v.a, {
                        title: "\u4e2a\u4eba\u8d44\u6599",
                        centered: !0,
                        visible: this.state.changePersonalDataVisible,
                        onOk: this.submitPersonalData,
                        onCancel: this.cancelPersonalData,
                        footer: t,
                        width: "700px"
                    }, f.a.createElement("div", {
                        className: "personal-data-warp"
                    }, f.a.createElement("div", {
                        className: "personal-data-item"
                    }, f.a.createElement("span", {
                        className: "global-hot-star"
                    }, "*"), "\u59d3\u540d\uff1a", this.state.personalData.name), f.a.createElement("div", {
                        className: "personal-data-item",
                        style: {
                            alignItems: "center"
                        }
                    }, "\xa0\u6635\u79f0\uff1a", f.a.createElement(m.a, {
                        value: this.state.personalData.nickname,
                        onChange: function(t) {
                            var n = e.state.personalData;
                            n.nickname = t.target.value,
                            e.setState({
                                personalData: n
                            })
                        },
                        style: {
                            width: 180
                        },
                        placeholder: "\u8bf7\u8f93\u5165\u6635\u79f0"
                    }), f.a.createElement("span", {
                        style: {
                            fontSize: 12,
                            marginLeft: "10px",
                            color: "#B6BFCC"
                        }
                    }, "\u652f\u63012-16\u4e2a\u6c49\u5b57\u3001\u5b57\u6bcd\u3001\u6570\u5b57\u7684\u7ec4\u5408")), f.a.createElement("div", {
                        className: "personal-data-item"
                    }, "\xa0\u5934\u50cf\uff1a", f.a.createElement("img", {
                        style: {
                            width: 120,
                            height: 120
                        },
                        src: this.state.tempAvatarUrl,
                        alt: ""
                    })), f.a.createElement("div", {
                        className: "personal-data-item"
                    }, f.a.createElement(x.a, {
                        listType: "text",
                        needCut: !0,
                        cropperOption: {
                            minCropBoxHeight: 240,
                            minCropBoxWidth: 240,
                            aspectRatio: 1,
                            zoomable: !0,
                            guides: !1,
                            viewMode: 1,
                            className: "cropper"
                        },
                        cropperTitle: "\u7f16\u8f91\u5934\u50cf",
                        cropperSubmitBtnName: "\u88c1\u526a",
                        getPicInfo: function(t) {
                            var n = e.state.personalData;
                            n.base64 = t.base64,
                            n.file = t.file,
                            e.setState({
                                personalData: n,
                                tempAvatarUrl: t.base64
                            })
                        }
                    }, f.a.createElement(N.a, {
                        size: "mini",
                        type: "default",
                        round: !0,
                        style: {
                            marginLeft: 50
                        }
                    }, "\u4fee\u6539")))))), f.a.createElement("div", null, f.a.createElement(v.a, {
                        title: "\u4fee\u6539\u624b\u673a\u53f7\u7801",
                        centered: !0,
                        getContainer: function() {
                            return document.getElementsByClassName("header-changePwd-modal-wrap")[0]
                        },
                        visible: this.state.phoneEditVisible,
                        onOk: this.submitUploadPhone,
                        onCancel: this.cancelUploadPhone,
                        footer: n,
                        width: "500px"
                    }, f.a.createElement("div", {
                        className: "phone-edit-box"
                    }, f.a.createElement("div", null, f.a.createElement("span", null, "\u5f53\u524d\u53f7\u7801\uff1a"), f.a.createElement("span", {
                        className: "phone-num-span"
                    }, this.state.originPhone)), f.a.createElement("div", {
                        className: "new-phone-input-warp"
                    }, f.a.createElement("span", {
                        className: "red-star"
                    }, "*"), f.a.createElement(m.a, {
                        value: this.state.newPhoneObj.phone,
                        maxLength: 11,
                        placeholder: "\u8bf7\u8f93\u5165\u65b0\u624b\u673a\u53f7\u7801",
                        onChange: function(t) {
                            var n = t.target.value.replace(/[^\d]/g, "");
                            setTimeout(function() {
                                var t = e.state.newPhoneObj;
                                t.phone = n,
                                e.setState({
                                    newPhoneObj: t,
                                    checkoutPhoneMsg: "",
                                    isGetAutoCode: 0
                                })
                            }, 10)
                        }
                    }), this.state.checkoutPhoneMsg && f.a.createElement("span", {
                        className: "error-phone"
                    }, this.state.checkoutPhoneMsg)), f.a.createElement("div", {
                        className: "auto-code-span"
                    }, f.a.createElement("span", {
                        className: "red-star"
                    }, "*"), f.a.createElement(m.a, {
                        value: this.state.newPhoneObj.autoCode,
                        maxLength: 4,
                        placeholder: "\u8bf7\u8f93\u5165\u77ed\u4fe1\u9a8c\u8bc1\u7801",
                        onChange: function(t) {
                            var n = t.target.value.replace(/[^\d]/g, "");
                            setTimeout(function() {
                                var t = e.state.newPhoneObj;
                                t.autoCode = n,
                                e.setState({
                                    newPhoneObj: t
                                })
                            }, 10)
                        }
                    }), f.a.createElement("a", {
                        className: this.state.timer ? "grey" : "",
                        onClick: this.getPhoneAutoCode_btn_click
                    }, function(e) {
                        if (e == G)
                            return "\u83b7\u53d6\u9a8c\u8bc1\u7801";
                        if (0 == e)
                            return "\u91cd\u53d1";
                        var t = parseInt(e / 60)
                          , n = e % 60;
                        return e < G ? t > 0 ? "\u83b7\u53d6\u9a8c\u8bc1\u7801\uff08".concat(t, "\u5206").concat(n, "\u79d2\uff09") : "\u83b7\u53d6\u9a8c\u8bc1\u7801\uff08".concat(n, "\u79d2\uff09") : void 0
                    }(this.state.autoCodeCountDown))))))))
                }
            }]),
            n
        }(f.a.Component);
        t.a = S.a.create({})(Object(E.g)(J))
    },
    600: function(e, t, n) {},
    601: function(e, t) {
        e.exports = "data:image/png;base64,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"
    },
    602: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAABH0lEQVQ4T62ST07CQBSHf68zaNzYM3ABpa5IqRgvwabxLKBnafQQrtASNDEpbiVRV7oz0cRg4tCfaRMawFJK9S1n3nzz/nwSjkwAwMf/RCCXd2/2jrYjgPW/MAk81b5UQxJIP6KrZNoHoCtCjViq3dqTYQpM4jr67olItwqQZO/QqZ0mbzMgSRXemyuBuBtCBy8P6qjTkekCMG39dlLX21sRQbsMlMC7oWocO/I8y88qnB2EkfEhSDa/Pgjfc/T5fOIvYHJZSiUi8Bx9svxrLvBmzF3zGY9WqiTyqCeW02zKRylgoUqEEap260CGeTPJrbBYJel6DXW2asCFwGWVSA5exzpTZOMK51WKSRgsKlIJmG49Mr5lIXb39cU6l34AQd1x32hkj6EAAAAASUVORK5CYII="
    },
    606: function(e, t, n) {
        "use strict";
        var a = n(0)
          , o = n.n(a)
          , r = n(2);
        function i(e, t) {
            return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function s(e) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function l(e, t) {
            return (l = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var c = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                i(this, s(t).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && l(e, t)
            }(t, a["Component"]),
            t
        }();
        function u(e, t) {
            return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function d(e) {
            return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function p(e, t) {
            return (p = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        c.isSelectOptGroup = !0;
        var f = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                u(this, d(t).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && p(e, t)
            }(t, a["Component"]),
            t
        }();
        function h(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function m() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            var a = t[0]
              , o = t[1]
              , i = t[2]
              , s = t.slice(3)
              , l = r.oneOfType([r.string, r.number])
              , c = r.shape({
                key: l.isRequired,
                label: r.node
            });
            return a.labelInValue ? r.oneOfType([r.arrayOf(c), c]).apply(void 0, [a, o, i].concat(h(s))) ? new Error("Invalid prop `".concat(o, "` supplied to `").concat(i, "`, ") + "when you set `labelInValue` to `true`, `".concat(o, "` should in ") + "shape of `{ key: string | number, label?: ReactNode }`.") : null : ("multiple" === a.mode || "tags" === a.mode || a.multiple || a.tags) && "" === a[o] ? new Error("Invalid prop `".concat(o, "` of type `string` supplied to `").concat(i, "`, ") + "expected `array` when `multiple` or `tags` is `true`.") : r.oneOfType([r.arrayOf(l), l]).apply(void 0, [a, o, i].concat(h(s)))
        }
        f.propTypes = {
            value: r.oneOfType([r.string, r.number])
        },
        f.isSelectOption = !0;
        var v = {
            id: r.string,
            defaultActiveFirstOption: r.bool,
            multiple: r.bool,
            filterOption: r.any,
            children: r.any,
            showSearch: r.bool,
            disabled: r.bool,
            allowClear: r.bool,
            showArrow: r.bool,
            tags: r.bool,
            prefixCls: r.string,
            className: r.string,
            transitionName: r.string,
            optionLabelProp: r.string,
            optionFilterProp: r.string,
            animation: r.string,
            choiceTransitionName: r.string,
            open: r.bool,
            defaultOpen: r.bool,
            onChange: r.func,
            onBlur: r.func,
            onFocus: r.func,
            onSelect: r.func,
            onSearch: r.func,
            onPopupScroll: r.func,
            onMouseEnter: r.func,
            onMouseLeave: r.func,
            onInputKeyDown: r.func,
            placeholder: r.any,
            onDeselect: r.func,
            labelInValue: r.bool,
            loading: r.bool,
            value: m,
            defaultValue: m,
            dropdownStyle: r.object,
            maxTagTextLength: r.number,
            maxTagCount: r.number,
            maxTagPlaceholder: r.oneOfType([r.node, r.func]),
            tokenSeparators: r.arrayOf(r.string),
            getInputElement: r.func,
            showAction: r.arrayOf(r.string),
            clearIcon: r.node,
            inputIcon: r.node,
            removeIcon: r.node,
            menuItemSelectedIcon: r.oneOfType([r.func, r.node]),
            dropdownRender: r.func
        }
          , y = n(52)
          , b = n.n(y)
          , g = n(180)
          , k = n.n(g)
          , S = n(181)
          , E = n(573)
          , A = n(618);
        function w(e) {
            var t = [];
            return o.a.Children.forEach(e, function(e) {
                void 0 !== e && null !== e && (Array.isArray(e) ? t = t.concat(w(e)) : Object(A.isFragment)(e) && e.props ? t = t.concat(w(e.props.children)) : t.push(e))
            }),
            t
        }
        var C = {
            MAC_ENTER: 3,
            BACKSPACE: 8,
            TAB: 9,
            NUM_CENTER: 12,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            PAUSE: 19,
            CAPS_LOCK: 20,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            PRINT_SCREEN: 44,
            INSERT: 45,
            DELETE: 46,
            ZERO: 48,
            ONE: 49,
            TWO: 50,
            THREE: 51,
            FOUR: 52,
            FIVE: 53,
            SIX: 54,
            SEVEN: 55,
            EIGHT: 56,
            NINE: 57,
            QUESTION_MARK: 63,
            A: 65,
            B: 66,
            C: 67,
            D: 68,
            E: 69,
            F: 70,
            G: 71,
            H: 72,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            M: 77,
            N: 78,
            O: 79,
            P: 80,
            Q: 81,
            R: 82,
            S: 83,
            T: 84,
            U: 85,
            V: 86,
            W: 87,
            X: 88,
            Y: 89,
            Z: 90,
            META: 91,
            WIN_KEY_RIGHT: 92,
            CONTEXT_MENU: 93,
            NUM_ZERO: 96,
            NUM_ONE: 97,
            NUM_TWO: 98,
            NUM_THREE: 99,
            NUM_FOUR: 100,
            NUM_FIVE: 101,
            NUM_SIX: 102,
            NUM_SEVEN: 103,
            NUM_EIGHT: 104,
            NUM_NINE: 105,
            NUM_MULTIPLY: 106,
            NUM_PLUS: 107,
            NUM_MINUS: 109,
            NUM_PERIOD: 110,
            NUM_DIVISION: 111,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            NUMLOCK: 144,
            SEMICOLON: 186,
            DASH: 189,
            EQUALS: 187,
            COMMA: 188,
            PERIOD: 190,
            SLASH: 191,
            APOSTROPHE: 192,
            SINGLE_QUOTE: 222,
            OPEN_SQUARE_BRACKET: 219,
            BACKSLASH: 220,
            CLOSE_SQUARE_BRACKET: 221,
            WIN_KEY: 224,
            MAC_FF_META: 224,
            WIN_IME: 229,
            isTextModifyingKeyEvent: function(e) {
                var t = e.keyCode;
                if (e.altKey && !e.ctrlKey || e.metaKey || t >= C.F1 && t <= C.F12)
                    return !1;
                switch (t) {
                case C.ALT:
                case C.CAPS_LOCK:
                case C.CONTEXT_MENU:
                case C.CTRL:
                case C.DOWN:
                case C.END:
                case C.ESC:
                case C.HOME:
                case C.INSERT:
                case C.LEFT:
                case C.MAC_FF_META:
                case C.META:
                case C.NUMLOCK:
                case C.NUM_CENTER:
                case C.PAGE_DOWN:
                case C.PAGE_UP:
                case C.PAUSE:
                case C.PRINT_SCREEN:
                case C.RIGHT:
                case C.SHIFT:
                case C.UP:
                case C.WIN_KEY:
                case C.WIN_KEY_RIGHT:
                    return !1;
                default:
                    return !0
                }
            },
            isCharacterKey: function(e) {
                if (e >= C.ZERO && e <= C.NINE)
                    return !0;
                if (e >= C.NUM_ZERO && e <= C.NUM_MULTIPLY)
                    return !0;
                if (e >= C.A && e <= C.Z)
                    return !0;
                if (-1 !== window.navigator.userAgent.indexOf("WebKit") && 0 === e)
                    return !0;
                switch (e) {
                case C.SPACE:
                case C.QUESTION_MARK:
                case C.NUM_PLUS:
                case C.NUM_MINUS:
                case C.NUM_PERIOD:
                case C.NUM_DIVISION:
                case C.SEMICOLON:
                case C.DASH:
                case C.EQUALS:
                case C.COMMA:
                case C.PERIOD:
                case C.SLASH:
                case C.APOSTROPHE:
                case C.SINGLE_QUOTE:
                case C.OPEN_SQUARE_BRACKET:
                case C.BACKSLASH:
                case C.CLOSE_SQUARE_BRACKET:
                    return !0;
                default:
                    return !1
                }
            }
        }
          , O = C
          , T = n(42)
          , P = n(567)
          , I = n(617)
          , N = n.n(I)
          , x = n(581)
          , M = n.n(x)
          , D = n(603)
          , j = n(608)
          , R = n.n(j);
        function L(e) {
            return "string" === typeof e ? e : ""
        }
        function V(e) {
            if (!e)
                return null;
            var t = e.props;
            if ("value"in t)
                return t.value;
            if (e.key)
                return e.key;
            if (e.type && e.type.isSelectOptGroup && t.label)
                return t.label;
            throw new Error("Need at least a key or a value or a label (only for OptGroup) for ".concat(e))
        }
        function F(e, t) {
            return "value" === t ? V(e) : e.props[t]
        }
        function B(e) {
            return e.combobox
        }
        function U(e) {
            return e.multiple || e.tags
        }
        function K(e) {
            return U(e) || B(e)
        }
        function Q(e) {
            return !K(e)
        }
        function z(e) {
            var t = e;
            return void 0 === e ? t = [] : Array.isArray(e) || (t = [e]),
            t
        }
        function G(e) {
            return "".concat(typeof e, "-").concat(e)
        }
        function J(e) {
            e.preventDefault()
        }
        function H(e, t) {
            var n = -1;
            if (e)
                for (var a = 0; a < e.length; a++)
                    if (e[a] === t) {
                        n = a;
                        break
                    }
            return n
        }
        function _(e, t) {
            var n;
            if (e = z(e))
                for (var a = 0; a < e.length; a++)
                    if (e[a].key === t) {
                        n = e[a].label;
                        break
                    }
            return n
        }
        var Y = {
            userSelect: "none",
            WebkitUserSelect: "none"
        }
          , W = {
            unselectable: "on"
        };
        function Z(e, t) {
            return !t.props.disabled && z(F(t, this.props.optionFilterProp)).join("").toLowerCase().indexOf(e.toLowerCase()) > -1
        }
        function X(e, t) {
            return function(n) {
                e[t] = n
            }
        }
        function q() {
            var e = (new Date).getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16),
                ("x" === t ? n : 7 & n | 8).toString(16)
            })
        }
        function $() {
            return ($ = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ee(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function te(e) {
            return (te = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ne(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ae(e, t) {
            return (ae = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        var oe = function(e) {
            function t(e) {
                var n, r, i;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                r = this,
                i = te(t).call(this, e),
                (n = !i || "object" !== typeof i && "function" !== typeof i ? ne(r) : i).rafInstance = null,
                n.lastVisible = !1,
                n.scrollActiveItemToView = function() {
                    var e = Object(T.findDOMNode)(n.firstActiveItem)
                      , t = n.props
                      , a = t.visible
                      , o = t.firstActiveValue
                      , r = n.props.value;
                    if (e && a) {
                        var i = {
                            onlyScrollIfNeeded: !0
                        };
                        r && 0 !== r.length || !o || (i.alignWithTop = !0),
                        n.rafInstance = M()(function() {
                            R()(e, Object(T.findDOMNode)(n.menuRef), i)
                        })
                    }
                }
                ,
                n.renderMenu = function() {
                    var e = n.props
                      , t = e.menuItems
                      , r = e.menuItemSelectedIcon
                      , i = e.defaultActiveFirstOption
                      , s = e.prefixCls
                      , l = e.multiple
                      , c = e.onMenuSelect
                      , u = e.inputValue
                      , d = e.backfillValue
                      , p = e.onMenuDeselect
                      , f = e.visible
                      , h = n.props.firstActiveValue;
                    if (t && t.length) {
                        var m = {};
                        l ? (m.onDeselect = p,
                        m.onSelect = c) : m.onClick = c;
                        var v = n.props.value
                          , y = function e(t, n) {
                            if (null === n || void 0 === n)
                                return [];
                            var a = [];
                            return o.a.Children.forEach(t, function(t) {
                                if (t.type.isMenuItemGroup)
                                    a = a.concat(e(t.props.children, n));
                                else {
                                    var o = V(t)
                                      , r = t.key;
                                    -1 !== H(n, o) && r && a.push(r)
                                }
                            }),
                            a
                        }(t, v)
                          , b = {}
                          , g = i
                          , k = t;
                        if (y.length || h) {
                            f && !n.lastVisible ? b.activeKey = y[0] || h : f || (y[0] && (g = !1),
                            b.activeKey = void 0);
                            var S = !1
                              , A = function(e) {
                                var t = e.key;
                                return !S && -1 !== y.indexOf(t) || !S && !y.length && -1 !== h.indexOf(e.key) ? (S = !0,
                                a.cloneElement(e, {
                                    ref: function(e) {
                                        n.firstActiveItem = e
                                    }
                                })) : e
                            };
                            k = t.map(function(e) {
                                if (e.type.isMenuItemGroup) {
                                    var t = w(e.props.children).map(A);
                                    return a.cloneElement(e, {}, t)
                                }
                                return A(e)
                            })
                        } else
                            n.firstActiveItem = null;
                        var C = v && v[v.length - 1];
                        return u === n.lastInputValue || C && C === d || (b.activeKey = ""),
                        a.createElement(E.e, $({
                            ref: n.saveMenuRef,
                            style: n.props.dropdownMenuStyle,
                            defaultActiveFirst: g,
                            role: "listbox",
                            itemIcon: l ? r : null
                        }, b, {
                            multiple: l
                        }, m, {
                            selectedKeys: y,
                            prefixCls: "".concat(s, "-menu")
                        }), k)
                    }
                    return null
                }
                ,
                n.lastInputValue = e.inputValue,
                n.saveMenuRef = X(ne(n), "menuRef"),
                n
            }
            var n, r, i;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ae(e, t)
            }(t, a["Component"]),
            n = t,
            (r = [{
                key: "componentDidMount",
                value: function() {
                    this.scrollActiveItemToView(),
                    this.lastVisible = this.props.visible
                }
            }, {
                key: "shouldComponentUpdate",
                value: function(e) {
                    return e.visible || (this.lastVisible = !1),
                    this.props.visible && !e.visible || e.visible || e.inputValue !== this.props.inputValue
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    var t = this.props;
                    !e.visible && t.visible && this.scrollActiveItemToView(),
                    this.lastVisible = t.visible,
                    this.lastInputValue = t.inputValue
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.rafInstance && M.a.cancel(this.rafInstance)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.renderMenu();
                    return e ? a.createElement("div", {
                        style: {
                            overflow: "auto",
                            transform: "translateZ(0)"
                        },
                        id: this.props.ariaId,
                        onFocus: this.props.onPopupFocus,
                        onMouseDown: J,
                        onScroll: this.props.onPopupScroll
                    }, e) : null
                }
            }]) && ee(n.prototype, r),
            i && ee(n, i),
            t
        }();
        function re(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function ie() {
            return (ie = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function se(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function le(e) {
            return (le = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function ce(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ue(e, t) {
            return (ue = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        oe.displayName = "DropdownMenu",
        oe.propTypes = {
            ariaId: r.string,
            defaultActiveFirstOption: r.bool,
            value: r.any,
            dropdownMenuStyle: r.object,
            multiple: r.bool,
            onPopupFocus: r.func,
            onPopupScroll: r.func,
            onMenuDeSelect: r.func,
            onMenuSelect: r.func,
            prefixCls: r.string,
            menuItems: r.any,
            inputValue: r.string,
            visible: r.bool,
            firstActiveValue: r.string,
            menuItemSelectedIcon: r.oneOfType([r.func, r.node])
        };
        var de = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
                    t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]])
            }
            return n
        };
        D.a.displayName = "Trigger";
        var pe = {
            bottomLeft: {
                points: ["tl", "bl"],
                offset: [0, 4],
                overflow: {
                    adjustX: 0,
                    adjustY: 1
                }
            },
            topLeft: {
                points: ["bl", "tl"],
                offset: [0, -4],
                overflow: {
                    adjustX: 0,
                    adjustY: 1
                }
            }
        }
          , fe = function(e) {
            function t(e) {
                var n, o, r;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                o = this,
                r = le(t).call(this, e),
                (n = !r || "object" !== typeof r && "function" !== typeof r ? ce(o) : r).dropdownMenuRef = null,
                n.rafInstance = null,
                n.setDropdownWidth = function() {
                    n.cancelRafInstance(),
                    n.rafInstance = M()(function() {
                        var e = T.findDOMNode(ce(n)).offsetWidth;
                        e !== n.state.dropdownWidth && n.setState({
                            dropdownWidth: e
                        })
                    })
                }
                ,
                n.cancelRafInstance = function() {
                    n.rafInstance && M.a.cancel(n.rafInstance)
                }
                ,
                n.getInnerMenu = function() {
                    return n.dropdownMenuRef && n.dropdownMenuRef.menuRef
                }
                ,
                n.getPopupDOMNode = function() {
                    return n.triggerRef.getPopupDomNode()
                }
                ,
                n.getDropdownElement = function(e) {
                    var t = n.props
                      , o = t.dropdownRender
                      , r = t.ariaId
                      , i = a.createElement(oe, ie({
                        ref: n.saveDropdownMenuRef
                    }, e, {
                        ariaId: r,
                        prefixCls: n.getDropdownPrefixCls(),
                        onMenuSelect: t.onMenuSelect,
                        onMenuDeselect: t.onMenuDeselect,
                        onPopupScroll: t.onPopupScroll,
                        value: t.value,
                        backfillValue: t.backfillValue,
                        firstActiveValue: t.firstActiveValue,
                        defaultActiveFirstOption: t.defaultActiveFirstOption,
                        dropdownMenuStyle: t.dropdownMenuStyle,
                        menuItemSelectedIcon: t.menuItemSelectedIcon
                    }));
                    return o ? o(i, t) : null
                }
                ,
                n.getDropdownTransitionName = function() {
                    var e = n.props
                      , t = e.transitionName;
                    return !t && e.animation && (t = "".concat(n.getDropdownPrefixCls(), "-").concat(e.animation)),
                    t
                }
                ,
                n.getDropdownPrefixCls = function() {
                    return "".concat(n.props.prefixCls, "-dropdown")
                }
                ,
                n.saveDropdownMenuRef = X(ce(n), "dropdownMenuRef"),
                n.saveTriggerRef = X(ce(n), "triggerRef"),
                n.state = {
                    dropdownWidth: 0
                },
                n
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ue(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    this.setDropdownWidth()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.setDropdownWidth()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.cancelRafInstance()
                }
            }, {
                key: "render",
                value: function() {
                    var e, t, n = this.props, o = n.onPopupFocus, r = n.empty, i = de(n, ["onPopupFocus", "empty"]), s = i.multiple, l = i.visible, c = i.inputValue, u = i.dropdownAlign, d = i.disabled, p = i.showSearch, f = i.dropdownClassName, h = i.dropdownStyle, m = i.dropdownMatchSelectWidth, v = this.getDropdownPrefixCls(), y = (re(e = {}, f, !!f),
                    re(e, "".concat(v, "--").concat(s ? "multiple" : "single"), 1),
                    re(e, "".concat(v, "--empty"), r),
                    e), g = this.getDropdownElement({
                        menuItems: i.options,
                        onPopupFocus: o,
                        multiple: s,
                        inputValue: c,
                        visible: l
                    });
                    t = d ? [] : Q(i) && !p ? ["click"] : ["blur"];
                    var k = ie({}, h)
                      , S = m ? "width" : "minWidth";
                    return this.state.dropdownWidth && (k[S] = "".concat(this.state.dropdownWidth, "px")),
                    a.createElement(D.a, ie({}, i, {
                        showAction: d ? [] : this.props.showAction,
                        hideAction: t,
                        ref: this.saveTriggerRef,
                        popupPlacement: "bottomLeft",
                        builtinPlacements: pe,
                        prefixCls: v,
                        popupTransitionName: this.getDropdownTransitionName(),
                        onPopupVisibleChange: i.onDropdownVisibleChange,
                        popup: g,
                        popupAlign: u,
                        popupVisible: l,
                        getPopupContainer: i.getPopupContainer,
                        popupClassName: b()(y),
                        popupStyle: k
                    }), i.children)
                }
            }]) && se(n.prototype, o),
            r && se(n, r),
            t
        }();
        function he(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function me() {
            return (me = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function ve(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function ye(e) {
            return (ye = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        function be(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        function ge(e, t) {
            return (ge = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        fe.defaultProps = {
            dropdownRender: function(e) {
                return e
            }
        },
        fe.propTypes = {
            onPopupFocus: r.func,
            onPopupScroll: r.func,
            dropdownMatchSelectWidth: r.bool,
            dropdownAlign: r.object,
            visible: r.bool,
            disabled: r.bool,
            showSearch: r.bool,
            dropdownClassName: r.string,
            multiple: r.bool,
            inputValue: r.string,
            filterOption: r.any,
            options: r.any,
            prefixCls: r.string,
            popupClassName: r.string,
            children: r.any,
            showAction: r.arrayOf(r.string),
            menuItemSelectedIcon: r.oneOfType([r.func, r.node]),
            dropdownRender: r.func,
            ariaId: r.string
        },
        fe.displayName = "SelectTrigger";
        var ke = "RC_SELECT_EMPTY_VALUE_KEY"
          , Se = function() {
            return null
        };
        function Ee() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function() {
                for (var e = arguments.length, n = new Array(e), a = 0; a < e; a++)
                    n[a] = arguments[a];
                for (var o = 0; o < t.length; o++)
                    t[o] && "function" === typeof t[o] && t[o].apply(Ee, n)
            }
        }
        var Ae = function(e) {
            function t(e) {
                var n, o, r;
                !function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                o = this,
                r = ye(t).call(this, e),
                (n = !r || "object" !== typeof r && "function" !== typeof r ? be(o) : r).inputRef = null,
                n.inputMirrorRef = null,
                n.topCtrlRef = null,
                n.selectTriggerRef = null,
                n.rootRef = null,
                n.selectionRef = null,
                n.dropdownContainer = null,
                n.blurTimer = null,
                n.focusTimer = null,
                n.comboboxTimer = null,
                n._focused = !1,
                n._mouseDown = !1,
                n._options = [],
                n._empty = !1,
                n.onInputChange = function(e) {
                    var t = n.props.tokenSeparators
                      , a = e.target.value;
                    if (U(n.props) && t.length && function(e, t) {
                        for (var n = 0; n < t.length; ++n)
                            if (e.lastIndexOf(t[n]) > 0)
                                return !0;
                        return !1
                    }(a, t)) {
                        var o = n.getValueByInput(a);
                        return void 0 !== o && n.fireChange(o),
                        n.setOpenState(!1, {
                            needFocus: !0
                        }),
                        void n.setInputValue("", !1)
                    }
                    n.setInputValue(a),
                    n.setState({
                        open: !0
                    }),
                    B(n.props) && n.fireChange([a])
                }
                ,
                n.onDropdownVisibleChange = function(e) {
                    e && !n._focused && (n.clearBlurTime(),
                    n.timeoutFocus(),
                    n._focused = !0,
                    n.updateFocusClassName()),
                    n.setOpenState(e)
                }
                ,
                n.onKeyDown = function(e) {
                    var t = n.state.open;
                    if (!n.props.disabled) {
                        var a = e.keyCode;
                        t && !n.getInputDOMNode() ? n.onInputKeyDown(e) : a === O.ENTER || a === O.DOWN ? (t || n.setOpenState(!0),
                        e.preventDefault()) : a === O.SPACE && (t || (n.setOpenState(!0),
                        e.preventDefault()))
                    }
                }
                ,
                n.onInputKeyDown = function(e) {
                    var t = n.props
                      , a = t.disabled
                      , o = t.combobox
                      , r = t.defaultActiveFirstOption;
                    if (!a) {
                        var i = n.state
                          , s = n.getRealOpenState(i)
                          , l = e.keyCode;
                        if (!U(n.props) || e.target.value || l !== O.BACKSPACE) {
                            if (l === O.DOWN) {
                                if (!i.open)
                                    return n.openIfHasChildren(),
                                    e.preventDefault(),
                                    void e.stopPropagation()
                            } else if (l === O.ENTER && i.open)
                                !s && o || e.preventDefault(),
                                s && o && !1 === r && (n.comboboxTimer = setTimeout(function() {
                                    n.setOpenState(!1)
                                }));
                            else if (l === O.ESC)
                                return void (i.open && (n.setOpenState(!1),
                                e.preventDefault(),
                                e.stopPropagation()));
                            if (s && n.selectTriggerRef) {
                                var c = n.selectTriggerRef.getInnerMenu();
                                c && c.onKeyDown(e, n.handleBackfill) && (e.preventDefault(),
                                e.stopPropagation())
                            }
                        } else {
                            e.preventDefault();
                            var u = i.value;
                            u.length && n.removeSelected(u[u.length - 1])
                        }
                    }
                }
                ,
                n.onMenuSelect = function(e) {
                    var t = e.item;
                    if (t) {
                        var a = n.state.value
                          , o = n.props
                          , r = V(t)
                          , i = a[a.length - 1]
                          , s = !1;
                        if (U(o) ? -1 !== H(a, r) ? s = !0 : a = a.concat([r]) : B(o) || void 0 === i || i !== r || r === n.state.backfillValue ? (a = [r],
                        n.setOpenState(!1, {
                            needFocus: !0,
                            fireSearch: !1
                        })) : (n.setOpenState(!1, {
                            needFocus: !0,
                            fireSearch: !1
                        }),
                        s = !0),
                        s || n.fireChange(a),
                        n.fireSelect(r),
                        !s) {
                            var l = B(o) ? F(t, o.optionLabelProp) : "";
                            o.autoClearSearchValue && n.setInputValue(l, !1)
                        }
                    }
                }
                ,
                n.onMenuDeselect = function(e) {
                    var t = e.item
                      , a = e.domEvent;
                    if ("keydown" !== a.type || a.keyCode !== O.ENTER) {
                        var o;
                        "click" === a.type && n.removeSelected(V(t)),
                        n.props.autoClearSearchValue && n.setInputValue("")
                    } else {
                        var r = T.findDOMNode(t);
                        (o = r) && null !== o.offsetParent && n.removeSelected(V(t))
                    }
                }
                ,
                n.onArrowClick = function(e) {
                    e.stopPropagation(),
                    e.preventDefault(),
                    n.props.disabled || n.setOpenState(!n.state.open, {
                        needFocus: !n.state.open
                    })
                }
                ,
                n.onPlaceholderClick = function() {
                    n.getInputDOMNode && n.getInputDOMNode() && n.getInputDOMNode().focus()
                }
                ,
                n.onOuterFocus = function(e) {
                    if (n.props.disabled)
                        e.preventDefault();
                    else {
                        n.clearBlurTime();
                        var t = n.getInputDOMNode();
                        t && e.target === n.rootRef || (K(n.props) || e.target !== t) && (n._focused || (n._focused = !0,
                        n.updateFocusClassName(),
                        U(n.props) && n._mouseDown || n.timeoutFocus()))
                    }
                }
                ,
                n.onPopupFocus = function() {
                    n.maybeFocus(!0, !0)
                }
                ,
                n.onOuterBlur = function(e) {
                    n.props.disabled ? e.preventDefault() : n.blurTimer = window.setTimeout(function() {
                        n._focused = !1,
                        n.updateFocusClassName();
                        var e = n.props
                          , t = n.state.value
                          , a = n.state.inputValue;
                        if (Q(e) && e.showSearch && a && e.defaultActiveFirstOption) {
                            var o = n._options || [];
                            if (o.length) {
                                var r = function e(t) {
                                    for (var n = 0; n < t.length; n++) {
                                        var a = t[n];
                                        if (a.type.isMenuItemGroup) {
                                            var o = e(a.props.children);
                                            if (o)
                                                return o
                                        } else if (!a.props.disabled)
                                            return a
                                    }
                                    return null
                                }(o);
                                r && (t = [V(r)],
                                n.fireChange(t))
                            }
                        } else if (U(e) && a) {
                            n._mouseDown ? n.setInputValue("") : (n.state.inputValue = "",
                            n.getInputDOMNode && n.getInputDOMNode() && (n.getInputDOMNode().value = ""));
                            var i = n.getValueByInput(a);
                            void 0 !== i && (t = i,
                            n.fireChange(t))
                        }
                        if (U(e) && n._mouseDown)
                            return n.maybeFocus(!0, !0),
                            void (n._mouseDown = !1);
                        n.setOpenState(!1),
                        e.onBlur && e.onBlur(n.getVLForOnChange(t))
                    }, 10)
                }
                ,
                n.onClearSelection = function(e) {
                    var t = n.props
                      , a = n.state;
                    if (!t.disabled) {
                        var o = a.inputValue
                          , r = a.value;
                        e.stopPropagation(),
                        (o || r.length) && (r.length && n.fireChange([]),
                        n.setOpenState(!1, {
                            needFocus: !0
                        }),
                        o && n.setInputValue(""))
                    }
                }
                ,
                n.onChoiceAnimationLeave = function() {
                    n.forcePopupAlign()
                }
                ,
                n.getOptionInfoBySingleValue = function(e, t) {
                    var o;
                    if ((t = t || n.state.optionsInfo)[G(e)] && (o = t[G(e)]),
                    o)
                        return o;
                    var r = e;
                    if (n.props.labelInValue) {
                        var i = _(n.props.value, e)
                          , s = _(n.props.defaultValue, e);
                        void 0 !== i ? r = i : void 0 !== s && (r = s)
                    }
                    return {
                        option: a.createElement(f, {
                            value: e,
                            key: e
                        }, e),
                        value: e,
                        label: r
                    }
                }
                ,
                n.getOptionBySingleValue = function(e) {
                    return n.getOptionInfoBySingleValue(e).option
                }
                ,
                n.getOptionsBySingleValue = function(e) {
                    return e.map(function(e) {
                        return n.getOptionBySingleValue(e)
                    })
                }
                ,
                n.getValueByLabel = function(e) {
                    if (void 0 === e)
                        return null;
                    var t = null;
                    return Object.keys(n.state.optionsInfo).forEach(function(a) {
                        var o = n.state.optionsInfo[a];
                        if (!o.disabled) {
                            var r = z(o.label);
                            r && r.join("") === e && (t = o.value)
                        }
                    }),
                    t
                }
                ,
                n.getVLBySingleValue = function(e) {
                    return n.props.labelInValue ? {
                        key: e,
                        label: n.getLabelBySingleValue(e)
                    } : e
                }
                ,
                n.getVLForOnChange = function(e) {
                    var t = e;
                    return void 0 !== t ? (t = n.props.labelInValue ? t.map(function(e) {
                        return {
                            key: e,
                            label: n.getLabelBySingleValue(e)
                        }
                    }) : t.map(function(e) {
                        return e
                    }),
                    U(n.props) ? t : t[0]) : t
                }
                ,
                n.getLabelBySingleValue = function(e, t) {
                    return n.getOptionInfoBySingleValue(e, t).label
                }
                ,
                n.getDropdownContainer = function() {
                    return n.dropdownContainer || (n.dropdownContainer = document.createElement("div"),
                    document.body.appendChild(n.dropdownContainer)),
                    n.dropdownContainer
                }
                ,
                n.getPlaceholderElement = function() {
                    var e = n.props
                      , t = n.state
                      , o = !1;
                    t.inputValue && (o = !0);
                    var r = t.value;
                    r.length && (o = !0),
                    B(e) && 1 === r.length && t.value && !t.value[0] && (o = !1);
                    var i = e.placeholder;
                    return i ? a.createElement("div", me({
                        onMouseDown: J,
                        style: me({
                            display: o ? "none" : "block"
                        }, Y)
                    }, W, {
                        onClick: n.onPlaceholderClick,
                        className: "".concat(e.prefixCls, "-selection__placeholder")
                    }), i) : null
                }
                ,
                n.getInputElement = function() {
                    var e = n.props
                      , t = a.createElement("input", {
                        id: e.id,
                        autoComplete: "off"
                    })
                      , o = e.getInputElement ? e.getInputElement() : t
                      , r = b()(o.props.className, he({}, "".concat(e.prefixCls, "-search__field"), !0));
                    return a.createElement("div", {
                        className: "".concat(e.prefixCls, "-search__field__wrap")
                    }, a.cloneElement(o, {
                        ref: n.saveInputRef,
                        onChange: n.onInputChange,
                        onKeyDown: Ee(n.onInputKeyDown, o.props.onKeyDown, n.props.onInputKeyDown),
                        value: n.state.inputValue,
                        disabled: e.disabled,
                        className: r
                    }), a.createElement("span", {
                        ref: n.saveInputMirrorRef,
                        className: "".concat(e.prefixCls, "-search__field__mirror")
                    }, n.state.inputValue, "\xa0"))
                }
                ,
                n.getInputDOMNode = function() {
                    return n.topCtrlRef ? n.topCtrlRef.querySelector("input,textarea,div[contentEditable]") : n.inputRef
                }
                ,
                n.getInputMirrorDOMNode = function() {
                    return n.inputMirrorRef
                }
                ,
                n.getPopupDOMNode = function() {
                    if (n.selectTriggerRef)
                        return n.selectTriggerRef.getPopupDOMNode()
                }
                ,
                n.getPopupMenuComponent = function() {
                    if (n.selectTriggerRef)
                        return n.selectTriggerRef.getInnerMenu()
                }
                ,
                n.setOpenState = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , a = t.needFocus
                      , o = t.fireSearch
                      , r = n.props;
                    if (n.state.open !== e) {
                        n.props.onDropdownVisibleChange && n.props.onDropdownVisibleChange(e);
                        var i = {
                            open: e,
                            backfillValue: ""
                        };
                        !e && Q(r) && r.showSearch && n.setInputValue("", o),
                        e || n.maybeFocus(e, !!a),
                        n.setState(me({
                            open: e
                        }, i), function() {
                            e && n.maybeFocus(e, !!a)
                        })
                    } else
                        n.maybeFocus(e, !!a)
                }
                ,
                n.setInputValue = function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , a = n.props.onSearch;
                    e !== n.state.inputValue && n.setState(function(n) {
                        return t && e !== n.inputValue && a && a(e),
                        {
                            inputValue: e
                        }
                    }, n.forcePopupAlign)
                }
                ,
                n.getValueByInput = function(e) {
                    var t = n.props
                      , a = t.multiple
                      , o = t.tokenSeparators
                      , r = n.state.value
                      , i = !1;
                    return function(e, t) {
                        var n = new RegExp("[".concat(t.join(), "]"));
                        return e.split(n).filter(function(e) {
                            return e
                        })
                    }(e, o).forEach(function(e) {
                        var t = [e];
                        if (a) {
                            var o = n.getValueByLabel(e);
                            o && -1 === H(r, o) && (r = r.concat(o),
                            i = !0,
                            n.fireSelect(o))
                        } else
                            -1 === H(r, e) && (r = r.concat(t),
                            i = !0,
                            n.fireSelect(e))
                    }),
                    i ? r : void 0
                }
                ,
                n.getRealOpenState = function(e) {
                    var t = n.props.open;
                    if ("boolean" === typeof t)
                        return t;
                    var a = (e || n.state).open
                      , o = n._options || [];
                    return !K(n.props) && n.props.showSearch || a && !o.length && (a = !1),
                    a
                }
                ,
                n.markMouseDown = function() {
                    n._mouseDown = !0
                }
                ,
                n.markMouseLeave = function() {
                    n._mouseDown = !1
                }
                ,
                n.handleBackfill = function(e) {
                    if (n.props.backfill && (Q(n.props) || B(n.props))) {
                        var t = V(e);
                        B(n.props) && n.setInputValue(t, !1),
                        n.setState({
                            value: [t],
                            backfillValue: t
                        })
                    }
                }
                ,
                n.filterOption = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z
                      , o = n.state.value
                      , r = o[o.length - 1];
                    if (!e || r && r === n.state.backfillValue)
                        return !0;
                    var i = n.props.filterOption;
                    return "filterOption"in n.props ? !0 === i && (i = a.bind(be(n))) : i = a.bind(be(n)),
                    !i || ("function" === typeof i ? i.call(be(n), e, t) : !t.props.disabled)
                }
                ,
                n.timeoutFocus = function() {
                    var e = n.props.onFocus;
                    n.focusTimer && n.clearFocusTime(),
                    n.focusTimer = window.setTimeout(function() {
                        e && e()
                    }, 10)
                }
                ,
                n.clearFocusTime = function() {
                    n.focusTimer && (clearTimeout(n.focusTimer),
                    n.focusTimer = null)
                }
                ,
                n.clearBlurTime = function() {
                    n.blurTimer && (clearTimeout(n.blurTimer),
                    n.blurTimer = null)
                }
                ,
                n.clearComboboxTime = function() {
                    n.comboboxTimer && (clearTimeout(n.comboboxTimer),
                    n.comboboxTimer = null)
                }
                ,
                n.updateFocusClassName = function() {
                    var e = n.rootRef
                      , t = n.props;
                    n._focused ? k()(e).add("".concat(t.prefixCls, "-focused")) : k()(e).remove("".concat(t.prefixCls, "-focused"))
                }
                ,
                n.maybeFocus = function(e, t) {
                    if (t || e) {
                        var a = n.getInputDOMNode()
                          , o = document.activeElement;
                        a && (e || K(n.props)) ? o !== a && (a.focus(),
                        n._focused = !0) : o !== n.selectionRef && n.selectionRef && (n.selectionRef.focus(),
                        n._focused = !0)
                    }
                }
                ,
                n.removeSelected = function(e, t) {
                    var a = n.props;
                    if (!a.disabled && !n.isChildDisabled(e)) {
                        t && t.stopPropagation && t.stopPropagation();
                        var o = n.state.value.filter(function(t) {
                            return t !== e
                        });
                        if (U(a)) {
                            var r = e;
                            a.labelInValue && (r = {
                                key: e,
                                label: n.getLabelBySingleValue(e)
                            }),
                            a.onDeselect && a.onDeselect(r, n.getOptionBySingleValue(e))
                        }
                        n.fireChange(o)
                    }
                }
                ,
                n.openIfHasChildren = function() {
                    var e = n.props;
                    (a.Children.count(e.children) || Q(e)) && n.setOpenState(!0)
                }
                ,
                n.fireSelect = function(e) {
                    n.props.onSelect && n.props.onSelect(n.getVLBySingleValue(e), n.getOptionBySingleValue(e))
                }
                ,
                n.fireChange = function(e) {
                    var t = n.props;
                    "value"in t || n.setState({
                        value: e
                    }, n.forcePopupAlign);
                    var a = n.getVLForOnChange(e)
                      , o = n.getOptionsBySingleValue(e);
                    t.onChange && t.onChange(a, U(n.props) ? o : o[0])
                }
                ,
                n.isChildDisabled = function(e) {
                    return w(n.props.children).some(function(t) {
                        return V(t) === e && t.props && t.props.disabled
                    })
                }
                ,
                n.forcePopupAlign = function() {
                    n.state.open && n.selectTriggerRef && n.selectTriggerRef.triggerRef && n.selectTriggerRef.triggerRef.forcePopupAlign()
                }
                ,
                n.renderFilterOptions = function() {
                    var e = n.state.inputValue
                      , t = n.props
                      , o = t.children
                      , r = t.tags
                      , i = t.notFoundContent
                      , s = []
                      , l = []
                      , c = !1
                      , u = n.renderFilterOptionsFromChildren(o, l, s);
                    if (r) {
                        var d = n.state.value;
                        (d = d.filter(function(t) {
                            return -1 === l.indexOf(t) && (!e || String(t).indexOf(String(e)) > -1)
                        })).sort(function(e, t) {
                            return e.length - t.length
                        }),
                        d.forEach(function(e) {
                            var t = e
                              , n = a.createElement(E.b, {
                                style: Y,
                                role: "option",
                                attribute: W,
                                value: t,
                                key: t
                            }, t);
                            u.push(n),
                            s.push(n)
                        }),
                        e && s.every(function(t) {
                            return V(t) !== e
                        }) && u.unshift(a.createElement(E.b, {
                            style: Y,
                            role: "option",
                            attribute: W,
                            value: e,
                            key: e
                        }, e))
                    }
                    return !u.length && i && (c = !0,
                    u = [a.createElement(E.b, {
                        style: Y,
                        attribute: W,
                        disabled: !0,
                        role: "option",
                        value: "NOT_FOUND",
                        key: "NOT_FOUND"
                    }, i)]),
                    {
                        empty: c,
                        options: u
                    }
                }
                ,
                n.renderFilterOptionsFromChildren = function(e, t, o) {
                    var r = []
                      , i = n.props
                      , s = n.state.inputValue
                      , l = i.tags;
                    return a.Children.forEach(e, function(e) {
                        if (e) {
                            var i = e.type;
                            if (i.isSelectOptGroup) {
                                var c = e.props.label
                                  , u = e.key;
                                if (u || "string" !== typeof c ? !c && u && (c = u) : u = c,
                                s && n.filterOption(s, e)) {
                                    var d = w(e.props.children).map(function(e) {
                                        var t = V(e) || e.key;
                                        return a.createElement(E.b, me({
                                            key: t,
                                            value: t
                                        }, e.props))
                                    });
                                    r.push(a.createElement(E.c, {
                                        key: u,
                                        title: c
                                    }, d))
                                } else {
                                    var p = n.renderFilterOptionsFromChildren(e.props.children, t, o);
                                    p.length && r.push(a.createElement(E.c, {
                                        key: u,
                                        title: c
                                    }, p))
                                }
                            } else {
                                N()(i.isSelectOption, "the children of `Select` should be `Select.Option` or `Select.OptGroup`, " + "instead of `".concat(i.name || i.displayName || e.type, "`."));
                                var f = V(e);
                                if (function(e, t) {
                                    if (!Q(t) && !function(e) {
                                        return e.multiple
                                    }(t) && "string" !== typeof e)
                                        throw new Error("Invalid `value` of type `".concat(typeof e, "` supplied to Option, ") + "expected `string` when `tags/combobox` is `true`.")
                                }(f, n.props),
                                n.filterOption(s, e)) {
                                    var h = a.createElement(E.b, me({
                                        style: Y,
                                        attribute: W,
                                        value: f,
                                        key: f,
                                        role: "option"
                                    }, e.props));
                                    r.push(h),
                                    o.push(h)
                                }
                                l && t.push(f)
                            }
                        }
                    }),
                    r
                }
                ,
                n.renderTopControlNode = function() {
                    var e = n.state
                      , t = e.open
                      , o = e.inputValue
                      , r = n.state.value
                      , i = n.props
                      , s = i.choiceTransitionName
                      , l = i.prefixCls
                      , c = i.maxTagTextLength
                      , u = i.maxTagCount
                      , d = i.showSearch
                      , p = i.removeIcon
                      , f = i.maxTagPlaceholder
                      , h = "".concat(l, "-selection__rendered")
                      , m = null;
                    if (Q(i)) {
                        var v = null;
                        if (r.length) {
                            var y = !1
                              , b = 1;
                            d && t ? (y = !o) && (b = .4) : y = !0;
                            var g = r[0]
                              , k = n.getOptionInfoBySingleValue(g)
                              , E = k.label
                              , A = k.title;
                            v = a.createElement("div", {
                                key: "value",
                                className: "".concat(l, "-selection-selected-value"),
                                title: L(A || E),
                                style: {
                                    display: y ? "block" : "none",
                                    opacity: b
                                }
                            }, E)
                        }
                        m = d ? [v, a.createElement("div", {
                            className: "".concat(l, "-search ").concat(l, "-search--inline"),
                            key: "input",
                            style: {
                                display: t ? "block" : "none"
                            }
                        }, n.getInputElement())] : [v]
                    } else {
                        var w, C = [], O = r;
                        if (void 0 !== u && r.length > u) {
                            O = O.slice(0, u);
                            var T = n.getVLForOnChange(r.slice(u, r.length))
                              , P = "+ ".concat(r.length - u, " ...");
                            f && (P = "function" === typeof f ? f(T) : f),
                            w = a.createElement("li", me({
                                style: Y
                            }, W, {
                                role: "presentation",
                                onMouseDown: J,
                                className: "".concat(l, "-selection__choice ").concat(l, "-selection__choice__disabled"),
                                key: "maxTagPlaceholder",
                                title: L(P)
                            }), a.createElement("div", {
                                className: "".concat(l, "-selection__choice__content")
                            }, P))
                        }
                        U(i) && (C = O.map(function(e) {
                            var t = n.getOptionInfoBySingleValue(e)
                              , o = t.label
                              , r = t.title || o;
                            c && "string" === typeof o && o.length > c && (o = "".concat(o.slice(0, c), "..."));
                            var i = n.isChildDisabled(e)
                              , s = i ? "".concat(l, "-selection__choice ").concat(l, "-selection__choice__disabled") : "".concat(l, "-selection__choice");
                            return a.createElement("li", me({
                                style: Y
                            }, W, {
                                onMouseDown: J,
                                className: s,
                                role: "presentation",
                                key: e || ke,
                                title: L(r)
                            }), a.createElement("div", {
                                className: "".concat(l, "-selection__choice__content")
                            }, o), i ? null : a.createElement("span", {
                                onClick: function(t) {
                                    n.removeSelected(e, t)
                                },
                                className: "".concat(l, "-selection__choice__remove")
                            }, p || a.createElement("i", {
                                className: "".concat(l, "-selection__choice__remove-icon")
                            }, "\xd7")))
                        })),
                        w && C.push(w),
                        C.push(a.createElement("li", {
                            className: "".concat(l, "-search ").concat(l, "-search--inline"),
                            key: "__input"
                        }, n.getInputElement())),
                        m = U(i) && s ? a.createElement(S.a, {
                            onLeave: n.onChoiceAnimationLeave,
                            component: "ul",
                            transitionName: s
                        }, C) : a.createElement("ul", null, C)
                    }
                    return a.createElement("div", {
                        className: h,
                        ref: n.saveTopCtrlRef
                    }, n.getPlaceholderElement(), m)
                }
                ;
                var i = t.getOptionsInfoFromProps(e);
                if (e.tags && "function" !== typeof e.filterOption) {
                    var s = Object.keys(i).some(function(e) {
                        return i[e].disabled
                    });
                    N()(!s, "Please avoid setting option to disabled in tags mode since user can always type text as tag.")
                }
                return n.state = {
                    value: t.getValueFromProps(e, !0),
                    inputValue: e.combobox ? t.getInputValueForCombobox(e, i, !0) : "",
                    open: e.defaultOpen,
                    optionsInfo: i,
                    backfillValue: "",
                    skipBuildOptionsInfo: !0,
                    ariaId: ""
                },
                n.saveInputRef = X(be(n), "inputRef"),
                n.saveInputMirrorRef = X(be(n), "inputMirrorRef"),
                n.saveTopCtrlRef = X(be(n), "topCtrlRef"),
                n.saveSelectTriggerRef = X(be(n), "selectTriggerRef"),
                n.saveRootRef = X(be(n), "rootRef"),
                n.saveSelectionRef = X(be(n), "selectionRef"),
                n
            }
            var n, o, r;
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && ge(e, t)
            }(t, a["Component"]),
            n = t,
            (o = [{
                key: "componentDidMount",
                value: function() {
                    (this.props.autoFocus || this.state.open) && this.focus(),
                    this.setState({
                        ariaId: q()
                    })
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    if (U(this.props)) {
                        var e = this.getInputDOMNode()
                          , t = this.getInputMirrorDOMNode();
                        e && e.value && t ? (e.style.width = "",
                        e.style.width = "".concat(t.clientWidth, "px")) : e && (e.style.width = "")
                    }
                    this.forcePopupAlign()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.clearFocusTime(),
                    this.clearBlurTime(),
                    this.clearComboboxTime(),
                    this.dropdownContainer && (T.unmountComponentAtNode(this.dropdownContainer),
                    document.body.removeChild(this.dropdownContainer),
                    this.dropdownContainer = null)
                }
            }, {
                key: "focus",
                value: function() {
                    Q(this.props) && this.selectionRef ? this.selectionRef.focus() : this.getInputDOMNode() && this.getInputDOMNode().focus()
                }
            }, {
                key: "blur",
                value: function() {
                    Q(this.props) && this.selectionRef ? this.selectionRef.blur() : this.getInputDOMNode() && this.getInputDOMNode().blur()
                }
            }, {
                key: "renderArrow",
                value: function(e) {
                    var t = this.props
                      , n = t.showArrow
                      , o = void 0 === n ? !e : n
                      , r = t.loading
                      , i = t.inputIcon
                      , s = t.prefixCls;
                    if (!o && !r)
                        return null;
                    var l = r ? a.createElement("i", {
                        className: "".concat(s, "-arrow-loading")
                    }) : a.createElement("i", {
                        className: "".concat(s, "-arrow-icon")
                    });
                    return a.createElement("span", me({
                        key: "arrow",
                        className: "".concat(s, "-arrow"),
                        style: Y
                    }, W, {
                        onClick: this.onArrowClick
                    }), i || l)
                }
            }, {
                key: "renderClear",
                value: function() {
                    var e = this.props
                      , t = e.prefixCls
                      , n = e.allowClear
                      , o = e.clearIcon
                      , r = this.state.inputValue
                      , i = this.state.value
                      , s = a.createElement("span", me({
                        key: "clear",
                        className: "".concat(t, "-selection__clear"),
                        onMouseDown: J,
                        style: Y
                    }, W, {
                        onClick: this.onClearSelection
                    }), o || a.createElement("i", {
                        className: "".concat(t, "-selection__clear-icon")
                    }, "\xd7"));
                    return n ? B(this.props) ? r ? s : null : r || i.length ? s : null : null
                }
            }, {
                key: "render",
                value: function() {
                    var e, t = this.props, n = U(t), o = t.showArrow, r = void 0 === o || o, i = this.state, s = t.className, l = t.disabled, c = t.prefixCls, u = t.loading, d = this.renderTopControlNode(), p = this.state, f = p.open, h = p.ariaId;
                    if (f) {
                        var m = this.renderFilterOptions();
                        this._empty = m.empty,
                        this._options = m.options
                    }
                    var v = this.getRealOpenState()
                      , y = this._empty
                      , g = this._options || []
                      , k = {};
                    Object.keys(t).forEach(function(e) {
                        !Object.prototype.hasOwnProperty.call(t, e) || "data-" !== e.substr(0, 5) && "aria-" !== e.substr(0, 5) && "role" !== e || (k[e] = t[e])
                    });
                    var S = me({}, k);
                    K(t) || (S = me(me({}, S), {
                        onKeyDown: this.onKeyDown,
                        tabIndex: t.disabled ? -1 : t.tabIndex
                    }));
                    var E = (he(e = {}, s, !!s),
                    he(e, c, 1),
                    he(e, "".concat(c, "-open"), f),
                    he(e, "".concat(c, "-focused"), f || !!this._focused),
                    he(e, "".concat(c, "-combobox"), B(t)),
                    he(e, "".concat(c, "-disabled"), l),
                    he(e, "".concat(c, "-enabled"), !l),
                    he(e, "".concat(c, "-allow-clear"), !!t.allowClear),
                    he(e, "".concat(c, "-no-arrow"), !r),
                    he(e, "".concat(c, "-loading"), !!u),
                    e);
                    return a.createElement(fe, {
                        onPopupFocus: this.onPopupFocus,
                        onMouseEnter: this.props.onMouseEnter,
                        onMouseLeave: this.props.onMouseLeave,
                        dropdownAlign: t.dropdownAlign,
                        dropdownClassName: t.dropdownClassName,
                        dropdownMatchSelectWidth: t.dropdownMatchSelectWidth,
                        defaultActiveFirstOption: t.defaultActiveFirstOption,
                        dropdownMenuStyle: t.dropdownMenuStyle,
                        transitionName: t.transitionName,
                        animation: t.animation,
                        prefixCls: t.prefixCls,
                        dropdownStyle: t.dropdownStyle,
                        combobox: t.combobox,
                        showSearch: t.showSearch,
                        options: g,
                        empty: y,
                        multiple: n,
                        disabled: l,
                        visible: v,
                        inputValue: i.inputValue,
                        value: i.value,
                        backfillValue: i.backfillValue,
                        firstActiveValue: t.firstActiveValue,
                        onDropdownVisibleChange: this.onDropdownVisibleChange,
                        getPopupContainer: t.getPopupContainer,
                        onMenuSelect: this.onMenuSelect,
                        onMenuDeselect: this.onMenuDeselect,
                        onPopupScroll: t.onPopupScroll,
                        showAction: t.showAction,
                        ref: this.saveSelectTriggerRef,
                        menuItemSelectedIcon: t.menuItemSelectedIcon,
                        dropdownRender: t.dropdownRender,
                        ariaId: h
                    }, a.createElement("div", {
                        id: t.id,
                        style: t.style,
                        ref: this.saveRootRef,
                        onBlur: this.onOuterBlur,
                        onFocus: this.onOuterFocus,
                        className: b()(E),
                        onMouseDown: this.markMouseDown,
                        onMouseUp: this.markMouseLeave,
                        onMouseOut: this.markMouseLeave
                    }, a.createElement("div", me({
                        ref: this.saveSelectionRef,
                        key: "selection",
                        className: "".concat(c, "-selection\n            ").concat(c, "-selection--").concat(n ? "multiple" : "single"),
                        role: "combobox",
                        "aria-autocomplete": "list",
                        "aria-haspopup": "true",
                        "aria-controls": h,
                        "aria-expanded": v
                    }, S), d, this.renderClear(), this.renderArrow(!!n))))
                }
            }]) && ve(n.prototype, o),
            r && ve(n, r),
            t
        }();
        Ae.propTypes = v,
        Ae.defaultProps = {
            prefixCls: "rc-select",
            defaultOpen: !1,
            labelInValue: !1,
            defaultActiveFirstOption: !0,
            showSearch: !0,
            allowClear: !1,
            placeholder: "",
            onChange: Se,
            onFocus: Se,
            onBlur: Se,
            onSelect: Se,
            onSearch: Se,
            onDeselect: Se,
            onInputKeyDown: Se,
            dropdownMatchSelectWidth: !0,
            dropdownStyle: {},
            dropdownMenuStyle: {},
            optionFilterProp: "value",
            optionLabelProp: "value",
            notFoundContent: "Not Found",
            backfill: !1,
            showAction: ["click"],
            tokenSeparators: [],
            autoClearSearchValue: !0,
            tabIndex: 0,
            dropdownRender: function(e) {
                return e
            }
        },
        Ae.getDerivedStateFromProps = function(e, t) {
            var n = t.skipBuildOptionsInfo ? t.optionsInfo : Ae.getOptionsInfoFromProps(e, t)
              , a = {
                optionsInfo: n,
                skipBuildOptionsInfo: !1
            };
            if ("open"in e && (a.open = e.open),
            e.disabled && t.open && (a.open = !1),
            "value"in e) {
                var o = Ae.getValueFromProps(e);
                a.value = o,
                e.combobox && (a.inputValue = Ae.getInputValueForCombobox(e, n))
            }
            return a
        }
        ,
        Ae.getOptionsFromChildren = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return a.Children.forEach(e, function(e) {
                e && (e.type.isSelectOptGroup ? Ae.getOptionsFromChildren(e.props.children, t) : t.push(e))
            }),
            t
        }
        ,
        Ae.getInputValueForCombobox = function(e, t, n) {
            var a = [];
            if ("value"in e && !n && (a = z(e.value)),
            "defaultValue"in e && n && (a = z(e.defaultValue)),
            !a.length)
                return "";
            var o = a = a[0];
            return e.labelInValue ? o = a.label : t[G(a)] && (o = t[G(a)].label),
            void 0 === o && (o = ""),
            o
        }
        ,
        Ae.getLabelFromOption = function(e, t) {
            return F(t, e.optionLabelProp)
        }
        ,
        Ae.getOptionsInfoFromProps = function(e, t) {
            var n = Ae.getOptionsFromChildren(e.children)
              , a = {};
            if (n.forEach(function(t) {
                var n = V(t);
                a[G(n)] = {
                    option: t,
                    value: n,
                    label: Ae.getLabelFromOption(e, t),
                    title: t.props.title,
                    disabled: t.props.disabled
                }
            }),
            t) {
                var o = t.optionsInfo
                  , r = t.value;
                r && r.forEach(function(e) {
                    var t = G(e);
                    a[t] || void 0 === o[t] || (a[t] = o[t])
                })
            }
            return a
        }
        ,
        Ae.getValueFromProps = function(e, t) {
            var n = [];
            return "value"in e && !t && (n = z(e.value)),
            "defaultValue"in e && t && (n = z(e.defaultValue)),
            e.labelInValue && (n = n.map(function(e) {
                return e.key
            })),
            n
        }
        ,
        Ae.displayName = "Select",
        Object(P.polyfill)(Ae);
        var we = Ae;
        we.Option = f,
        we.OptGroup = c;
        var Ce = we
          , Oe = n(571)
          , Te = n(661)
          , Pe = n(31)
          , Ie = n(174)
          , Ne = n(592);
        function xe(e) {
            return (xe = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function Me() {
            return (Me = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function De(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function je(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                a.enumerable = a.enumerable || !1,
                a.configurable = !0,
                "value"in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a)
            }
        }
        function Re(e, t) {
            return (Re = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Le(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, a = Ve(e);
                if (t) {
                    var o = Ve(this).constructor;
                    n = Reflect.construct(a, arguments, o)
                } else
                    n = a.apply(this, arguments);
                return function(e, t) {
                    if (t && ("object" === xe(t) || "function" === typeof t))
                        return t;
                    return function(e) {
                        if (void 0 === e)
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e
                    }(e)
                }(this, n)
            }
        }
        function Ve(e) {
            return (Ve = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        n.d(t, "a", function() {
            return Ke
        });
        var Fe = function(e, t) {
            var n = {};
            for (var a in e)
                Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (a = Object.getOwnPropertySymbols(e); o < a.length; o++)
                    t.indexOf(a[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[o]) && (n[a[o]] = e[a[o]])
            }
            return n
        }
          , Be = Object(Ne.a)("default", "large", "small")
          , Ue = (Object(Ne.a)("default", "multiple", "tags", "combobox", "SECRET_COMBOBOX_MODE_DO_NOT_USE"),
        {
            prefixCls: r.string,
            className: r.string,
            size: r.oneOf(Be),
            notFoundContent: r.any,
            showSearch: r.bool,
            optionLabelProp: r.string,
            transitionName: r.string,
            choiceTransitionName: r.string,
            id: r.string
        })
          , Ke = function(e) {
            !function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && Re(e, t)
            }(i, a["Component"]);
            var t, n, o, r = Le(i);
            function i(e) {
                var t;
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, i),
                (t = r.call(this, e)).saveSelect = function(e) {
                    t.rcSelect = e
                }
                ,
                t.renderSelect = function(e) {
                    var n, o = e.getPopupContainer, r = e.getPrefixCls, i = e.renderEmpty, s = t.props, l = s.prefixCls, c = s.className, u = void 0 === c ? "" : c, d = s.size, p = s.mode, f = s.getPopupContainer, h = s.removeIcon, m = s.clearIcon, v = s.menuItemSelectedIcon, y = s.showArrow, g = Fe(s, ["prefixCls", "className", "size", "mode", "getPopupContainer", "removeIcon", "clearIcon", "menuItemSelectedIcon", "showArrow"]), k = Object(Oe.a)(g, ["inputIcon"]), S = r("select", l), E = b()((De(n = {}, "".concat(S, "-lg"), "large" === d),
                    De(n, "".concat(S, "-sm"), "small" === d),
                    De(n, "".concat(S, "-show-arrow"), y),
                    n), u), A = t.props.optionLabelProp;
                    t.isCombobox() && (A = A || "value");
                    var w = {
                        multiple: "multiple" === p,
                        tags: "tags" === p,
                        combobox: t.isCombobox()
                    }
                      , C = h && (a.isValidElement(h) ? a.cloneElement(h, {
                        className: b()(h.props.className, "".concat(S, "-remove-icon"))
                    }) : h) || a.createElement(Ie.a, {
                        type: "close",
                        className: "".concat(S, "-remove-icon")
                    })
                      , O = m && (a.isValidElement(m) ? a.cloneElement(m, {
                        className: b()(m.props.className, "".concat(S, "-clear-icon"))
                    }) : m) || a.createElement(Ie.a, {
                        type: "close-circle",
                        theme: "filled",
                        className: "".concat(S, "-clear-icon")
                    })
                      , T = v && (a.isValidElement(v) ? a.cloneElement(v, {
                        className: b()(v.props.className, "".concat(S, "-selected-icon"))
                    }) : v) || a.createElement(Ie.a, {
                        type: "check",
                        className: "".concat(S, "-selected-icon")
                    });
                    return a.createElement(Ce, Me({
                        inputIcon: t.renderSuffixIcon(S),
                        removeIcon: C,
                        clearIcon: O,
                        menuItemSelectedIcon: T,
                        showArrow: y
                    }, k, w, {
                        prefixCls: S,
                        className: E,
                        optionLabelProp: A || "children",
                        notFoundContent: t.getNotFoundContent(i),
                        getPopupContainer: f || o,
                        ref: t.saveSelect
                    }))
                }
                ,
                Object(Pe.a)("combobox" !== e.mode, "Select", "The combobox mode is deprecated, it will be removed in next major version, please use AutoComplete instead"),
                t
            }
            return t = i,
            (n = [{
                key: "getNotFoundContent",
                value: function(e) {
                    var t = this.props.notFoundContent;
                    return void 0 !== t ? t : this.isCombobox() ? null : e("Select")
                }
            }, {
                key: "focus",
                value: function() {
                    this.rcSelect.focus()
                }
            }, {
                key: "blur",
                value: function() {
                    this.rcSelect.blur()
                }
            }, {
                key: "isCombobox",
                value: function() {
                    var e = this.props.mode;
                    return "combobox" === e || e === i.SECRET_COMBOBOX_MODE_DO_NOT_USE
                }
            }, {
                key: "renderSuffixIcon",
                value: function(e) {
                    var t = this.props
                      , n = t.loading
                      , o = t.suffixIcon;
                    return o ? a.isValidElement(o) ? a.cloneElement(o, {
                        className: b()(o.props.className, "".concat(e, "-arrow-icon"))
                    }) : o : n ? a.createElement(Ie.a, {
                        type: "loading"
                    }) : a.createElement(Ie.a, {
                        type: "down",
                        className: "".concat(e, "-arrow-icon")
                    })
                }
            }, {
                key: "render",
                value: function() {
                    return a.createElement(Te.a, null, this.renderSelect)
                }
            }]) && je(t.prototype, n),
            o && je(t, o),
            i
        }();
        Ke.Option = f,
        Ke.OptGroup = c,
        Ke.SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE",
        Ke.defaultProps = {
            showSearch: !1,
            transitionName: "slide-up",
            choiceTransitionName: "zoom"
        },
        Ke.propTypes = Ue
    },
    609: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a, o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }(), r = n(0), i = ((a = r) && a.__esModule,
        n(590));
        var s = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                function(e, t) {
                    if (!e)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return function(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }(t, r.Component),
            o(t, [{
                key: "getChildContext",
                value: function() {
                    return {
                        miniStore: this.props.store
                    }
                }
            }, {
                key: "render",
                value: function() {
                    return r.Children.only(this.props.children)
                }
            }]),
            t
        }();
        s.propTypes = {
            store: i.storeShape.isRequired
        },
        s.childContextTypes = {
            miniStore: i.storeShape.isRequired
        },
        t.default = s
    },
    610: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
          , o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var a = t[n];
                    a.enumerable = a.enumerable || !1,
                    a.configurable = !0,
                    "value"in a && (a.writable = !0),
                    Object.defineProperty(e, a.key, a)
                }
            }
            return function(t, n, a) {
                return n && e(t.prototype, n),
                a && e(t, a),
                t
            }
        }();
        t.default = function(e) {
            var t = !!e
              , n = e || p;
            return function(d) {
                var p = function(r) {
                    function l(e, t) {
                        !function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError("Cannot call a class as a function")
                        }(this, l);
                        var a = function(e, t) {
                            if (!e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" !== typeof t && "function" !== typeof t ? e : t
                        }(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e, t));
                        return a.handleChange = function() {
                            if (a.unsubscribe) {
                                var e = n(a.store.getState(), a.props);
                                a.setState({
                                    subscribed: e
                                })
                            }
                        }
                        ,
                        a.store = t.miniStore,
                        a.state = {
                            subscribed: n(a.store.getState(), e),
                            store: a.store,
                            props: e
                        },
                        a
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t)
                            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }),
                        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(l, r),
                    o(l, null, [{
                        key: "getDerivedStateFromProps",
                        value: function(t, a) {
                            return e && 2 === e.length && t !== a.props ? {
                                subscribed: n(a.store.getState(), t),
                                props: t
                            } : {
                                props: t
                            }
                        }
                    }]),
                    o(l, [{
                        key: "componentDidMount",
                        value: function() {
                            this.trySubscribe()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.tryUnsubscribe()
                        }
                    }, {
                        key: "shouldComponentUpdate",
                        value: function(e, t) {
                            return !(0,
                            s.default)(this.props, e) || !(0,
                            s.default)(this.state.subscribed, t.subscribed)
                        }
                    }, {
                        key: "trySubscribe",
                        value: function() {
                            t && (this.unsubscribe = this.store.subscribe(this.handleChange),
                            this.handleChange())
                        }
                    }, {
                        key: "tryUnsubscribe",
                        value: function() {
                            this.unsubscribe && (this.unsubscribe(),
                            this.unsubscribe = null)
                        }
                    }, {
                        key: "getWrappedInstance",
                        value: function() {
                            return this.wrappedInstance
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this
                              , t = a({}, this.props, this.state.subscribed, {
                                store: this.store
                            });
                            return d.prototype.render && (t = a({}, t, {
                                ref: function(t) {
                                    return e.wrappedInstance = t
                                }
                            })),
                            i.default.createElement(d, t)
                        }
                    }]),
                    l
                }(r.Component);
                return p.displayName = "Connect(" + function(e) {
                    return e.displayName || e.name || "Component"
                }(d) + ")",
                p.contextTypes = {
                    miniStore: u.storeShape.isRequired
                },
                (0,
                c.polyfill)(p),
                (0,
                l.default)(p, d)
            }
        }
        ;
        var r = n(0)
          , i = d(r)
          , s = d(n(569))
          , l = d(n(611))
          , c = n(567)
          , u = n(590);
        function d(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var p = function() {
            return {}
        }
    },
    611: function(e, t, n) {
        "use strict";
        var a = {
            childContextTypes: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , r = Object.defineProperty
          , i = Object.getOwnPropertyNames
          , s = Object.getOwnPropertySymbols
          , l = Object.getOwnPropertyDescriptor
          , c = Object.getPrototypeOf
          , u = c && c(Object);
        e.exports = function e(t, n, d) {
            if ("string" !== typeof n) {
                if (u) {
                    var p = c(n);
                    p && p !== u && e(t, p, d)
                }
                var f = i(n);
                s && (f = f.concat(s(n)));
                for (var h = 0; h < f.length; ++h) {
                    var m = f[h];
                    if (!a[m] && !o[m] && (!d || !d[m])) {
                        var v = l(n, m);
                        try {
                            r(t, m, v)
                        } catch (y) {}
                    }
                }
                return t
            }
            return t
        }
    },
    612: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
        }
        ;
        t.default = function(e) {
            var t = e
              , n = [];
            return {
                setState: function(e) {
                    t = a({}, t, e);
                    for (var o = 0; o < n.length; o++)
                        n[o]()
                },
                getState: function() {
                    return t
                },
                subscribe: function(e) {
                    return n.push(e),
                    function() {
                        var t = n.indexOf(e);
                        n.splice(t, 1)
                    }
                }
            }
        }
    },
    613: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        }),
        n.d(t, "d", function() {
            return u
        }),
        n.d(t, "c", function() {
            return d
        }),
        n.d(t, "b", function() {
            return p
        });
        var a = !("undefined" === typeof window || !window.document || !window.document.createElement);
        function o(e, t) {
            var n = {};
            return n[e.toLowerCase()] = t.toLowerCase(),
            n["Webkit" + e] = "webkit" + t,
            n["Moz" + e] = "moz" + t,
            n["ms" + e] = "MS" + t,
            n["O" + e] = "o" + t.toLowerCase(),
            n
        }
        var r = function(e, t) {
            var n = {
                animationend: o("Animation", "AnimationEnd"),
                transitionend: o("Transition", "TransitionEnd")
            };
            return e && ("AnimationEvent"in t || delete n.animationend.animation,
            "TransitionEvent"in t || delete n.transitionend.transition),
            n
        }(a, "undefined" !== typeof window ? window : {})
          , i = {};
        a && (i = document.createElement("div").style);
        var s = {};
        function l(e) {
            if (s[e])
                return s[e];
            var t = r[e];
            if (t)
                for (var n = Object.keys(t), a = n.length, o = 0; o < a; o += 1) {
                    var l = n[o];
                    if (Object.prototype.hasOwnProperty.call(t, l) && l in i)
                        return s[e] = t[l],
                        s[e]
                }
            return ""
        }
        var c = l("animationend")
          , u = l("transitionend")
          , d = !(!c || !u);
        function p(e, t) {
            return e ? "object" === typeof e ? e[t.replace(/-\w/g, function(e) {
                return e[1].toUpperCase()
            })] : e + "-" + t : null
        }
    },
    614: function(e, t) {
        window.MutationObserver || (window.MutationObserver = function(e) {
            function t(e) {
                this.i = [],
                this.m = e
            }
            function n(t) {
                var n, a = {
                    type: null,
                    target: null,
                    addedNodes: [],
                    removedNodes: [],
                    previousSibling: null,
                    nextSibling: null,
                    attributeName: null,
                    attributeNamespace: null,
                    oldValue: null
                };
                for (n in t)
                    a[n] !== e && t[n] !== e && (a[n] = t[n]);
                return a
            }
            function a(t, a) {
                var s = r(t, a);
                return function(c) {
                    var u = c.length;
                    if (a.a && 3 === t.nodeType && t.nodeValue !== s.a && c.push(new n({
                        type: "characterData",
                        target: t,
                        oldValue: s.a
                    })),
                    a.b && s.b && o(c, t, s.b, a.f),
                    a.c || a.g)
                        var d = function(t, a, r, s) {
                            function c(e, a, r, i, l) {
                                var c, d, p, f = e.length - 1;
                                for (l = -~((f - l) / 2); p = e.pop(); )
                                    c = r[p.j],
                                    d = i[p.l],
                                    s.c && l && Math.abs(p.j - p.l) >= f && (t.push(n({
                                        type: "childList",
                                        target: a,
                                        addedNodes: [c],
                                        removedNodes: [c],
                                        nextSibling: c.nextSibling,
                                        previousSibling: c.previousSibling
                                    })),
                                    l--),
                                    s.b && d.b && o(t, c, d.b, s.f),
                                    s.a && 3 === c.nodeType && c.nodeValue !== d.a && t.push(n({
                                        type: "characterData",
                                        target: c,
                                        oldValue: d.a
                                    })),
                                    s.g && u(c, d)
                            }
                            function u(a, r) {
                                for (var p, f, h, m, v, y = a.childNodes, b = r.c, g = y.length, k = b ? b.length : 0, S = 0, E = 0, A = 0; E < g || A < k; )
                                    m = y[E],
                                    v = (h = b[A]) && h.node,
                                    m === v ? (s.b && h.b && o(t, m, h.b, s.f),
                                    s.a && h.a !== e && m.nodeValue !== h.a && t.push(n({
                                        type: "characterData",
                                        target: m,
                                        oldValue: h.a
                                    })),
                                    f && c(f, a, y, b, S),
                                    s.g && (m.childNodes.length || h.c && h.c.length) && u(m, h),
                                    E++,
                                    A++) : (d = !0,
                                    p || (p = {},
                                    f = []),
                                    m && (p[h = i(m)] || (p[h] = !0,
                                    -1 === (h = l(b, m, A, "node")) ? s.c && (t.push(n({
                                        type: "childList",
                                        target: a,
                                        addedNodes: [m],
                                        nextSibling: m.nextSibling,
                                        previousSibling: m.previousSibling
                                    })),
                                    S++) : f.push({
                                        j: E,
                                        l: h
                                    })),
                                    E++),
                                    v && v !== y[E] && (p[h = i(v)] || (p[h] = !0,
                                    -1 === (h = l(y, v, E)) ? s.c && (t.push(n({
                                        type: "childList",
                                        target: r.node,
                                        removedNodes: [v],
                                        nextSibling: b[A + 1],
                                        previousSibling: b[A - 1]
                                    })),
                                    S--) : f.push({
                                        j: h,
                                        l: A
                                    })),
                                    A++));
                                f && c(f, a, y, b, S)
                            }
                            var d;
                            return u(a, r),
                            d
                        }(c, t, s, a);
                    (d || c.length !== u) && (s = r(t, a))
                }
            }
            function o(t, a, o, r) {
                for (var i, s, l = {}, c = a.attributes, d = c.length; d--; )
                    s = (i = c[d]).name,
                    r && r[s] === e || (u(a, i) !== o[s] && t.push(n({
                        type: "attributes",
                        target: a,
                        attributeName: s,
                        oldValue: o[s],
                        attributeNamespace: i.namespaceURI
                    })),
                    l[s] = !0);
                for (s in o)
                    l[s] || t.push(n({
                        target: a,
                        type: "attributes",
                        attributeName: s,
                        oldValue: o[s]
                    }))
            }
            function r(e, t) {
                var n = !0;
                return function e(a) {
                    var o = {
                        node: a
                    };
                    return !t.a || 3 !== a.nodeType && 8 !== a.nodeType ? (t.b && n && 1 === a.nodeType && (o.b = s(a.attributes, function(e, n) {
                        return t.f && !t.f[n.name] || (e[n.name] = u(a, n)),
                        e
                    }, {})),
                    n && (t.c || t.a || t.b && t.g) && (o.c = function(e, t) {
                        for (var n = [], a = 0; a < e.length; a++)
                            n[a] = t(e[a], a, e);
                        return n
                    }(a.childNodes, e)),
                    n = t.g) : o.a = a.nodeValue,
                    o
                }(e)
            }
            function i(e) {
                try {
                    return e.id || (e.mo_id = e.mo_id || d++)
                } catch (t) {
                    try {
                        return e.nodeValue
                    } catch (n) {
                        return d++
                    }
                }
            }
            function s(e, t, n) {
                for (var a = 0; a < e.length; a++)
                    n = t(n, e[a], a, e);
                return n
            }
            function l(e, t, n, a) {
                for (; n < e.length; n++)
                    if ((a ? e[n][a] : e[n]) === t)
                        return n;
                return -1
            }
            t._period = 30,
            t.prototype = {
                observe: function(e, n) {
                    for (var o = {
                        b: !!(n.attributes || n.attributeFilter || n.attributeOldValue),
                        c: !!n.childList,
                        g: !!n.subtree,
                        a: !(!n.characterData && !n.characterDataOldValue)
                    }, r = this.i, i = 0; i < r.length; i++)
                        r[i].s === e && r.splice(i, 1);
                    n.attributeFilter && (o.f = s(n.attributeFilter, function(e, t) {
                        return e[t] = !0,
                        e
                    }, {})),
                    r.push({
                        s: e,
                        o: a(e, o)
                    }),
                    this.h || function(e) {
                        !function n() {
                            var a = e.takeRecords();
                            a.length && e.m(a, e),
                            e.h = setTimeout(n, t._period)
                        }()
                    }(this)
                },
                takeRecords: function() {
                    for (var e = [], t = this.i, n = 0; n < t.length; n++)
                        t[n].o(e);
                    return e
                },
                disconnect: function() {
                    this.i = [],
                    clearTimeout(this.h),
                    this.h = null
                }
            };
            var c = document.createElement("i");
            c.style.top = 0;
            var u = (c = "null" != c.attributes.style.value) ? function(e, t) {
                return t.value
            }
            : function(e, t) {
                return "style" !== t.name ? t.value : e.style.cssText
            }
              , d = 1;
            return t
        }(void 0))
    },
    616: function(e, t, n) {
        "use strict";
        var a = n(15)
          , o = n.n(a)
          , r = n(18)
          , i = n.n(r)
          , s = n(24)
          , l = n.n(s)
          , c = n(26)
          , u = n.n(c)
          , d = n(25)
          , p = n.n(d)
          , f = n(37)
          , h = n.n(f)
          , m = n(0)
          , v = n.n(m)
          , y = n(2)
          , b = n.n(y)
          , g = n(567)
          , k = n(42)
          , S = n.n(k);
        var E = n(52)
          , A = n.n(E)
          , w = n(581)
          , C = n.n(w)
          , O = n(613)
          , T = "none"
          , P = "appear"
          , I = "enter"
          , N = "leave"
          , x = {
            eventProps: b.a.object,
            visible: b.a.bool,
            children: b.a.func,
            motionName: b.a.oneOfType([b.a.string, b.a.object]),
            motionAppear: b.a.bool,
            motionEnter: b.a.bool,
            motionLeave: b.a.bool,
            motionLeaveImmediately: b.a.bool,
            motionDeadline: b.a.number,
            removeOnLeave: b.a.bool,
            leavedClassName: b.a.string,
            onAppearStart: b.a.func,
            onAppearActive: b.a.func,
            onAppearEnd: b.a.func,
            onEnterStart: b.a.func,
            onEnterActive: b.a.func,
            onEnterEnd: b.a.func,
            onLeaveStart: b.a.func,
            onLeaveActive: b.a.func,
            onLeaveEnd: b.a.func
        };
        t.a = function(e) {
            var t = e
              , n = !!v.a.forwardRef;
            function a(e) {
                return !(!e.motionName || !t)
            }
            "object" === typeof e && (t = e.transitionSupport,
            n = "forwardRef"in e ? e.forwardRef : n);
            var r = function(e) {
                function t() {
                    l()(this, t);
                    var e = p()(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.onDomUpdate = function() {
                        var t = e.state
                          , n = t.status
                          , o = t.newStatus
                          , r = e.props
                          , i = r.onAppearStart
                          , s = r.onEnterStart
                          , l = r.onLeaveStart
                          , c = r.onAppearActive
                          , u = r.onEnterActive
                          , d = r.onLeaveActive
                          , p = r.motionAppear
                          , f = r.motionEnter
                          , h = r.motionLeave;
                        if (a(e.props)) {
                            var m = e.getElement();
                            e.$cacheEle !== m && (e.removeEventListener(e.$cacheEle),
                            e.addEventListener(m),
                            e.$cacheEle = m),
                            o && n === P && p ? e.updateStatus(i, null, null, function() {
                                e.updateActiveStatus(c, P)
                            }) : o && n === I && f ? e.updateStatus(s, null, null, function() {
                                e.updateActiveStatus(u, I)
                            }) : o && n === N && h && e.updateStatus(l, null, null, function() {
                                e.updateActiveStatus(d, N)
                            })
                        }
                    }
                    ,
                    e.onMotionEnd = function(t) {
                        var n = e.state
                          , a = n.status
                          , o = n.statusActive
                          , r = e.props
                          , i = r.onAppearEnd
                          , s = r.onEnterEnd
                          , l = r.onLeaveEnd;
                        a === P && o ? e.updateStatus(i, {
                            status: T
                        }, t) : a === I && o ? e.updateStatus(s, {
                            status: T
                        }, t) : a === N && o && e.updateStatus(l, {
                            status: T
                        }, t)
                    }
                    ,
                    e.setNodeRef = function(t) {
                        var n = e.props.internalRef;
                        e.node = t,
                        "function" === typeof n ? n(t) : n && "current"in n && (n.current = t)
                    }
                    ,
                    e.getElement = function() {
                        try {
                            return (t = e.node || e)instanceof HTMLElement ? t : S.a.findDOMNode(t)
                        } catch (n) {
                            return e.$cacheEle
                        }
                        var t
                    }
                    ,
                    e.addEventListener = function(t) {
                        t && (t.addEventListener(O.d, e.onMotionEnd),
                        t.addEventListener(O.a, e.onMotionEnd))
                    }
                    ,
                    e.removeEventListener = function(t) {
                        t && (t.removeEventListener(O.d, e.onMotionEnd),
                        t.removeEventListener(O.a, e.onMotionEnd))
                    }
                    ,
                    e.updateStatus = function(t, n, a, o) {
                        var r = t ? t(e.getElement(), a) : null;
                        if (!1 !== r && !e._destroyed) {
                            var s = void 0;
                            o && (s = function() {
                                e.nextFrame(o)
                            }
                            ),
                            e.setState(i()({
                                statusStyle: "object" === typeof r ? r : null,
                                newStatus: !1
                            }, n), s)
                        }
                    }
                    ,
                    e.updateActiveStatus = function(t, n) {
                        e.nextFrame(function() {
                            if (e.state.status === n) {
                                var a = e.props.motionDeadline;
                                e.updateStatus(t, {
                                    statusActive: !0
                                }),
                                a > 0 && setTimeout(function() {
                                    e.onMotionEnd({
                                        deadline: !0
                                    })
                                }, a)
                            }
                        })
                    }
                    ,
                    e.nextFrame = function(t) {
                        e.cancelNextFrame(),
                        e.raf = C()(t)
                    }
                    ,
                    e.cancelNextFrame = function() {
                        e.raf && (C.a.cancel(e.raf),
                        e.raf = null)
                    }
                    ,
                    e.state = {
                        status: T,
                        statusActive: !1,
                        newStatus: !1,
                        statusStyle: null
                    },
                    e.$cacheEle = null,
                    e.node = null,
                    e.raf = null,
                    e
                }
                return h()(t, e),
                u()(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.onDomUpdate()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.onDomUpdate()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._destroyed = !0,
                        this.removeEventListener(this.$cacheEle),
                        this.cancelNextFrame()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this.state, n = t.status, r = t.statusActive, s = t.statusStyle, l = this.props, c = l.children, u = l.motionName, d = l.visible, p = l.removeOnLeave, f = l.leavedClassName, h = l.eventProps;
                        return c ? n !== T && a(this.props) ? c(i()({}, h, {
                            className: A()((e = {},
                            o()(e, Object(O.b)(u, n), n !== T),
                            o()(e, Object(O.b)(u, n + "-active"), n !== T && r),
                            o()(e, u, "string" === typeof u),
                            e)),
                            style: s
                        }), this.setNodeRef) : d ? c(i()({}, h), this.setNodeRef) : p ? null : c(i()({}, h, {
                            className: f
                        }), this.setNodeRef) : null
                    }
                }], [{
                    key: "getDerivedStateFromProps",
                    value: function(e, t) {
                        var n = t.prevProps
                          , o = t.status;
                        if (!a(e))
                            return {};
                        var r = e.visible
                          , i = e.motionAppear
                          , s = e.motionEnter
                          , l = e.motionLeave
                          , c = e.motionLeaveImmediately
                          , u = {
                            prevProps: e
                        };
                        return (o === P && !i || o === I && !s || o === N && !l) && (u.status = T,
                        u.statusActive = !1,
                        u.newStatus = !1),
                        !n && r && i && (u.status = P,
                        u.statusActive = !1,
                        u.newStatus = !0),
                        n && !n.visible && r && s && (u.status = I,
                        u.statusActive = !1,
                        u.newStatus = !0),
                        (n && n.visible && !r && l || !n && c && !r && l) && (u.status = N,
                        u.statusActive = !1,
                        u.newStatus = !0),
                        u
                    }
                }]),
                t
            }(v.a.Component);
            return r.propTypes = i()({}, x, {
                internalRef: b.a.oneOfType([b.a.object, b.a.func])
            }),
            r.defaultProps = {
                visible: !0,
                motionEnter: !0,
                motionAppear: !0,
                motionLeave: !0,
                removeOnLeave: !0
            },
            Object(g.polyfill)(r),
            n ? v.a.forwardRef(function(e, t) {
                return v.a.createElement(r, i()({
                    internalRef: t
                }, e))
            }) : r
        }(O.c)
    },
    618: function(e, t, n) {
        "use strict";
        e.exports = n(619)
    },
    619: function(e, t, n) {
        "use strict";
        var a = "function" === typeof Symbol && Symbol.for
          , o = a ? Symbol.for("react.element") : 60103
          , r = a ? Symbol.for("react.portal") : 60106
          , i = a ? Symbol.for("react.fragment") : 60107
          , s = a ? Symbol.for("react.strict_mode") : 60108
          , l = a ? Symbol.for("react.profiler") : 60114
          , c = a ? Symbol.for("react.provider") : 60109
          , u = a ? Symbol.for("react.context") : 60110
          , d = a ? Symbol.for("react.async_mode") : 60111
          , p = a ? Symbol.for("react.concurrent_mode") : 60111
          , f = a ? Symbol.for("react.forward_ref") : 60112
          , h = a ? Symbol.for("react.suspense") : 60113
          , m = a ? Symbol.for("react.suspense_list") : 60120
          , v = a ? Symbol.for("react.memo") : 60115
          , y = a ? Symbol.for("react.lazy") : 60116
          , b = a ? Symbol.for("react.block") : 60121
          , g = a ? Symbol.for("react.fundamental") : 60117
          , k = a ? Symbol.for("react.responder") : 60118
          , S = a ? Symbol.for("react.scope") : 60119;
        function E(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case o:
                    switch (e = e.type) {
                    case d:
                    case p:
                    case i:
                    case l:
                    case s:
                    case h:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case u:
                        case f:
                        case y:
                        case v:
                        case c:
                            return e;
                        default:
                            return t
                        }
                    }
                case r:
                    return t
                }
            }
        }
        function A(e) {
            return E(e) === p
        }
        t.AsyncMode = d,
        t.ConcurrentMode = p,
        t.ContextConsumer = u,
        t.ContextProvider = c,
        t.Element = o,
        t.ForwardRef = f,
        t.Fragment = i,
        t.Lazy = y,
        t.Memo = v,
        t.Portal = r,
        t.Profiler = l,
        t.StrictMode = s,
        t.Suspense = h,
        t.isAsyncMode = function(e) {
            return A(e) || E(e) === d
        }
        ,
        t.isConcurrentMode = A,
        t.isContextConsumer = function(e) {
            return E(e) === u
        }
        ,
        t.isContextProvider = function(e) {
            return E(e) === c
        }
        ,
        t.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === o
        }
        ,
        t.isForwardRef = function(e) {
            return E(e) === f
        }
        ,
        t.isFragment = function(e) {
            return E(e) === i
        }
        ,
        t.isLazy = function(e) {
            return E(e) === y
        }
        ,
        t.isMemo = function(e) {
            return E(e) === v
        }
        ,
        t.isPortal = function(e) {
            return E(e) === r
        }
        ,
        t.isProfiler = function(e) {
            return E(e) === l
        }
        ,
        t.isStrictMode = function(e) {
            return E(e) === s
        }
        ,
        t.isSuspense = function(e) {
            return E(e) === h
        }
        ,
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === i || e === p || e === l || e === s || e === h || e === m || "object" === typeof e && null !== e && (e.$$typeof === y || e.$$typeof === v || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === g || e.$$typeof === k || e.$$typeof === S || e.$$typeof === b)
        }
        ,
        t.typeOf = E
    },
    630: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.formatTime = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e
              , n = Math.floor(e % 60)
              , a = Math.floor(e / 60 % 60)
              , o = Math.floor(e / 3600)
              , r = Math.floor(t / 60 % 60)
              , i = Math.floor(t / 3600);
            (l(e) || e === 1 / 0) && (o = "-",
            a = "-",
            n = "-");
            return o = o > 0 || i > 0 ? "".concat(o, ":") : "",
            a = "".concat((o || r >= 10) && a < 10 ? "0".concat(a) : a, ":"),
            n = n < 10 ? "0".concat(n) : n,
            o + a + n
        }
        ,
        t.isVideoChild = function(e) {
            if (e.props && e.props.isVideoChild)
                return !0;
            return "source" === e.type || "track" === e.type
        }
        ,
        t.mergeAndSortChildren = function(e, t, n) {
            var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
              , o = s.default.Children.toArray(t)
              , l = (n.order,
            (0,
            i.default)(n, ["order"]));
            return o.filter(function(e) {
                return !e.props.disabled
            }).concat(e.filter(function(e) {
                return !c(o, function(t) {
                    return u(t, e)
                })
            })).map(function(t) {
                var n = c(e, function(e) {
                    return u(e, t)
                })
                  , a = n ? n.props : {}
                  , o = (0,
                r.default)({}, l, a, t.props)
                  , i = s.default.cloneElement(t, o, t.props.children);
                return i
            }).sort(function(e, t) {
                return (e.props.order || a) - (t.props.order || a)
            })
        }
        ,
        t.deprecatedWarning = function(e, t) {}
        ,
        t.throttle = function(e, t) {
            var n = arguments
              , a = !1;
            return function() {
                a || (e.apply(void 0, (0,
                o.default)(n)),
                a = !0,
                setTimeout(function() {
                    a = !1
                }, t))
            }
        }
        ,
        t.mediaProperties = void 0;
        var o = a(n(838))
          , r = a(n(647))
          , i = a(n(788))
          , s = a(n(0))
          , l = Number.isNaN || function(e) {
            return e !== e
        }
        ;
        var c = function(e, t) {
            return e.filter(t)[0]
        }
          , u = function(e, t) {
            var n = e.type
              , a = t.type;
            return "string" === typeof n || "string" === typeof a ? n === a : "function" === typeof n && "function" === typeof a && n.displayName === a.displayName
        };
        t.mediaProperties = ["error", "src", "srcObject", "currentSrc", "crossOrigin", "networkState", "preload", "buffered", "readyState", "seeking", "currentTime", "duration", "paused", "defaultPlaybackRate", "playbackRate", "played", "seekable", "ended", "autoplay", "loop", "mediaGroup", "controller", "controls", "volume", "muted", "defaultMuted", "audioTracks", "videoTracks", "textTracks", "width", "height", "videoWidth", "videoHeight", "poster"]
    },
    647: function(e, t, n) {
        var a = n(787);
        e.exports = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {}
                  , o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                o.forEach(function(t) {
                    a(e, t, n[t])
                })
            }
            return e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    683: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        var a = n(607);
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                  , o = Object.keys(n);
                "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                o.forEach(function(t) {
                    Object(a.a)(e, t, n[t])
                })
            }
            return e
        }
    },
    695: function(e, t) {
        function n() {
            return e.exports = n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0,
            n.apply(this, arguments)
        }
        e.exports = n,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    699: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handleLoadStart = function(e) {
            return {
                type: a,
                videoProps: e
            }
        }
        ,
        t.handleCanPlay = function(e) {
            return {
                type: o,
                videoProps: e
            }
        }
        ,
        t.handleWaiting = function(e) {
            return {
                type: r,
                videoProps: e
            }
        }
        ,
        t.handleCanPlayThrough = function(e) {
            return {
                type: i,
                videoProps: e
            }
        }
        ,
        t.handlePlaying = function(e) {
            return {
                type: s,
                videoProps: e
            }
        }
        ,
        t.handlePlay = function(e) {
            return {
                type: l,
                videoProps: e
            }
        }
        ,
        t.handlePause = function(e) {
            return {
                type: c,
                videoProps: e
            }
        }
        ,
        t.handleEnd = function(e) {
            return {
                type: u,
                videoProps: e
            }
        }
        ,
        t.handleSeeking = function(e) {
            return {
                type: d,
                videoProps: e
            }
        }
        ,
        t.handleSeeked = function(e) {
            return {
                type: p,
                videoProps: e
            }
        }
        ,
        t.handleDurationChange = function(e) {
            return {
                type: m,
                videoProps: e
            }
        }
        ,
        t.handleTimeUpdate = function(e) {
            return {
                type: v,
                videoProps: e
            }
        }
        ,
        t.handleVolumeChange = function(e) {
            return {
                type: y,
                videoProps: e
            }
        }
        ,
        t.handleProgressChange = function(e) {
            return {
                type: b,
                videoProps: e
            }
        }
        ,
        t.handleRateChange = function(e) {
            return {
                type: g,
                videoProps: e
            }
        }
        ,
        t.handleSuspend = function(e) {
            return {
                type: k,
                videoProps: e
            }
        }
        ,
        t.handleAbort = function(e) {
            return {
                type: S,
                videoProps: e
            }
        }
        ,
        t.handleEmptied = function(e) {
            return {
                type: E,
                videoProps: e
            }
        }
        ,
        t.handleStalled = function(e) {
            return {
                type: A,
                videoProps: e
            }
        }
        ,
        t.handleLoadedMetaData = function(e) {
            return {
                type: w,
                videoProps: e
            }
        }
        ,
        t.handleLoadedData = function(e) {
            return {
                type: C,
                videoProps: e
            }
        }
        ,
        t.handleResize = function(e) {
            return {
                type: O,
                videoProps: e
            }
        }
        ,
        t.handleError = function(e) {
            return {
                type: T,
                videoProps: e
            }
        }
        ,
        t.handleSeekingTime = function(e) {
            return {
                type: f,
                time: e
            }
        }
        ,
        t.handleEndSeeking = function(e) {
            return {
                type: h,
                time: e
            }
        }
        ,
        t.activateTextTrack = function(e) {
            return {
                type: P,
                textTrack: e
            }
        }
        ,
        t.ACTIVATE_TEXT_TRACK = t.ERROR = t.RESIZE = t.LOADED_DATA = t.LOADED_META_DATA = t.STALLED = t.EMPTIED = t.ABORT = t.SUSPEND = t.RATE_CHANGE = t.PROGRESS_CHANGE = t.VOLUME_CHANGE = t.TIME_UPDATE = t.DURATION_CHANGE = t.END_SEEKING = t.SEEKING_TIME = t.SEEKED = t.SEEKING = t.END = t.PAUSE = t.PLAY = t.PLAYING = t.CAN_PLAY_THROUGH = t.WAITING = t.CAN_PLAY = t.LOAD_START = void 0;
        var a = "video-react/LOAD_START";
        t.LOAD_START = a;
        var o = "video-react/CAN_PLAY";
        t.CAN_PLAY = o;
        var r = "video-react/WAITING";
        t.WAITING = r;
        var i = "video-react/CAN_PLAY_THROUGH";
        t.CAN_PLAY_THROUGH = i;
        var s = "video-react/PLAYING";
        t.PLAYING = s;
        var l = "video-react/PLAY";
        t.PLAY = l;
        var c = "video-react/PAUSE";
        t.PAUSE = c;
        var u = "video-react/END";
        t.END = u;
        var d = "video-react/SEEKING";
        t.SEEKING = d;
        var p = "video-react/SEEKED";
        t.SEEKED = p;
        var f = "video-react/SEEKING_TIME";
        t.SEEKING_TIME = f;
        var h = "video-react/END_SEEKING";
        t.END_SEEKING = h;
        var m = "video-react/DURATION_CHANGE";
        t.DURATION_CHANGE = m;
        var v = "video-react/TIME_UPDATE";
        t.TIME_UPDATE = v;
        var y = "video-react/VOLUME_CHANGE";
        t.VOLUME_CHANGE = y;
        var b = "video-react/PROGRESS_CHANGE";
        t.PROGRESS_CHANGE = b;
        var g = "video-react/RATE_CHANGE";
        t.RATE_CHANGE = g;
        var k = "video-react/SUSPEND";
        t.SUSPEND = k;
        var S = "video-react/ABORT";
        t.ABORT = S;
        var E = "video-react/EMPTIED";
        t.EMPTIED = E;
        var A = "video-react/STALLED";
        t.STALLED = A;
        var w = "video-react/LOADED_META_DATA";
        t.LOADED_META_DATA = w;
        var C = "video-react/LOADED_DATA";
        t.LOADED_DATA = C;
        var O = "video-react/RESIZE";
        t.RESIZE = O;
        var T = "video-react/ERROR";
        t.ERROR = T;
        var P = "video-react/ACTIVATE_TEXT_TRACK";
        t.ACTIVATE_TEXT_TRACK = P
    },
    745: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.handleFullscreenChange = function(e) {
            return {
                type: i,
                isFullscreen: e
            }
        }
        ,
        t.activate = function(e) {
            return {
                type: s,
                activity: e
            }
        }
        ,
        t.userActivate = function(e) {
            return {
                type: l,
                activity: e
            }
        }
        ,
        t.play = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                action: "play",
                source: ""
            };
            return this.video.play(),
            {
                type: r,
                operation: e
            }
        }
        ,
        t.pause = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                action: "pause",
                source: ""
            };
            return this.video.pause(),
            {
                type: r,
                operation: e
            }
        }
        ,
        t.togglePlay = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                action: "toggle-play",
                source: ""
            };
            return this.video.togglePlay(),
            {
                type: r,
                operation: e
            }
        }
        ,
        t.seek = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: "seek",
                source: ""
            };
            return this.video.seek(e),
            {
                type: r,
                operation: t
            }
        }
        ,
        t.forward = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: "forward-".concat(e),
                source: ""
            };
            return this.video.forward(e),
            {
                type: r,
                operation: t
            }
        }
        ,
        t.replay = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: "replay-".concat(e),
                source: ""
            };
            return this.video.replay(e),
            {
                type: r,
                operation: t
            }
        }
        ,
        t.changeRate = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: "change-rate",
                source: ""
            };
            return this.video.playbackRate = e,
            {
                type: r,
                operation: t
            }
        }
        ,
        t.changeVolume = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: "change-volume",
                source: ""
            }
              , n = e;
            e < 0 && (n = 0);
            e > 1 && (n = 1);
            return this.video.volume = n,
            {
                type: r,
                operation: t
            }
        }
        ,
        t.mute = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                action: e ? "muted" : "unmuted",
                source: ""
            };
            return this.video.muted = e,
            {
                type: r,
                operation: t
            }
        }
        ,
        t.toggleFullscreen = function(e) {
            if (o.default.enabled)
                return o.default.isFullscreen ? o.default.exit() : o.default.request(this.rootElement),
                {
                    type: r,
                    operation: {
                        action: "toggle-fullscreen",
                        source: ""
                    }
                };
            return {
                type: i,
                isFullscreen: !e.isFullscreen
            }
        }
        ,
        t.USER_ACTIVATE = t.PLAYER_ACTIVATE = t.FULLSCREEN_CHANGE = t.OPERATE = void 0;
        var o = a(n(833))
          , r = "video-react/OPERATE";
        t.OPERATE = r;
        var i = "video-react/FULLSCREEN_CHANGE";
        t.FULLSCREEN_CHANGE = i;
        var s = "video-react/PLAYER_ACTIVATE";
        t.PLAYER_ACTIVATE = s;
        var l = "video-react/USER_ACTIVATE";
        t.USER_ACTIVATE = l
    },
    746: function(e, t, n) {
        "use strict";
        function a(e) {
            var t;
            if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()),
            !t)
                return {
                    left: 0,
                    top: 0
                };
            var n = document
              , a = n.body
              , o = n.documentElement
              , r = o.clientLeft || a.clientLeft || 0
              , i = window.pageXOffset || a.scrollLeft
              , s = t.left + i - r
              , l = o.clientTop || a.clientTop || 0
              , c = window.pageYOffset || a.scrollTop
              , u = t.top + c - l;
            return {
                left: Math.round(s),
                top: Math.round(u)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.findElPosition = a,
        t.getPointerPosition = function(e, t) {
            var n = {}
              , o = a(e)
              , r = e.offsetWidth
              , i = e.offsetHeight
              , s = o.top
              , l = o.left
              , c = t.pageY
              , u = t.pageX;
            t.changedTouches && (u = t.changedTouches[0].pageX,
            c = t.changedTouches[0].pageY);
            return n.y = Math.max(0, Math.min(1, (s - c + i) / i)),
            n.x = Math.max(0, Math.min(1, (u - l) / r)),
            n
        }
        ,
        t.blurNode = function(e) {
            e && e.blur && e.blur()
        }
        ,
        t.focusNode = function(e) {
            e && e.focus && e.focus()
        }
        ,
        t.hasClass = function(e, t) {
            for (var n = e.className.split(" "), a = 0; a < n.length; a++)
                if (n[a].toLowerCase() === t.toLowerCase())
                    return !0;
            return !1
        }
    },
    786: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAgCAYAAABkWOo9AAAD/klEQVRYR81YzU9cVRw95743MzyYGVuglEaMMZoUaCgSviLahFYXUrTGGkzUaFoW3egf4d/Rbd2xcOFCN1ZA02FRXBghlIRGp2qtpfRj5jHDzHv3mBmCQvgoBKbMXb737rln7u+e8zt3iJ3GiJx2wEtEl0ymUJ+fHWNhx+8r+JI7YXd8/OhonG5LGINxi7p741r8PkBVkM+20NsSbR9RPFmX7QE0QJgirJmIpb2fx8cZVA3Rvs+eNBjXdMHqLIBWgL8pdL727tRMVQ3R05+qrsbN9lN8F0AbhUWQEwyCH1JfJReqovTdV5aec3NeB5zgLGE6JfllkjDXp/xv7mDsw/Awyl5a878z2j7yTzwe9/qM5XmRrZAegkyFoZ1czsfnZ8dQrBzJpwuU7SOKujXZIzU0fYZ2WOAZkglBvwKconTbkr4BjfT/D9sPaRKSDUK6TgHW5gJrHtPJL7rZ+sXUGHNbYfP10fuJYrH2pDEYBTQsoJkEIdwDcReAX5ooyS0/P4Ah0FJYEelDWiKZFuwcLGdzyi78cq25vOb6cShEIUiGRQoBwLwgn+IiqbTAuSAI5yMrifT63d1UeoBvYLX0M5UqfVkcBi5kPQFHKLSIagGYoLAk4WYQ4vp0oW4WYywLeJOYaDkEog3CQ0ipUKiEmNg+Musmou01ITMnHOO0wtjTEDpINkG6J5jJ0NoJefHb01e5vOHMrdqT20HXGZRFJylf4GQl7akkZi+23OBATY6LUyL6JbwC0JeUchj5thB9kN4kjjXDN5bvgGyD9OBZGX73R08a3Zj6CPdtSa8C+EOyY0B0ZksVH14LFc9czjauWL5liAsCkhB+AjRflaGkZzR/0tjgggE6IWVA83dVxrz+T5RExO8HcA7gy4QKuzRw8VmGkcEv5S4vPH4BdIZpzBCh2l0SPYB2tEeIkqg9x79IYBRCY9USHRyUm38p+wGs+QLU8eom+mLuomg/B1C9RMulp/8+DS4JaKjKHV0TE03kPKBSS/eqkugme5JWqpLoRsNnBsTOhr9HRzmAz1dbaEHOm4B9D7tpoQew6p4hShlDxvQ60pDILugpoWTPK+xjwlrMc42OGZpToO235ZinnMAbxuq7opf5vUJntNRydxzsvgLH9Ze8kJFycKaDDkAdEI6XgrMVfrTC+JbBeR8bU5762oi8fPJRUzQ0JyS3gWDNdpg0oQvRg3AUBs9LaqGYBLEk4KYBvk/5W1xF9kuyNL/rcuZYLDQ9oh0g2Qmofkvc0uWOCCgGAlYI+aK5Tykt2VuhG52LZGIbL3cHQXANo/dSttmBGRB0jlIvqcat8CVjRZX+wsyRpbsZ/hRxi5YzDIPZQm3yr+mryK1PbP8CVcgw9y/hrZAAAAAASUVORK5CYII="
    },
    787: function(e, t) {
        e.exports = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    788: function(e, t, n) {
        var a = n(1001);
        e.exports = function(e, t) {
            if (null == e)
                return {};
            var n, o, r = a(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (o = 0; o < i.length; o++)
                    n = i[o],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
            }
            return r
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    789: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = a(n(746))
          , m = {
            className: d.default.string,
            onMouseDown: d.default.func,
            onMouseMove: d.default.func,
            stepForward: d.default.func,
            stepBack: d.default.func,
            sliderActive: d.default.func,
            sliderInactive: d.default.func,
            onMouseUp: d.default.func,
            onFocus: d.default.func,
            onBlur: d.default.func,
            onClick: d.default.func,
            getPercent: d.default.func,
            vertical: d.default.bool,
            children: d.default.node,
            label: d.default.string,
            valuenow: d.default.string,
            valuetext: d.default.string
        }
          , v = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleMouseDown = a.handleMouseDown.bind((0,
                c.default)(a)),
                a.handleMouseMove = a.handleMouseMove.bind((0,
                c.default)(a)),
                a.handleMouseUp = a.handleMouseUp.bind((0,
                c.default)(a)),
                a.handleFocus = a.handleFocus.bind((0,
                c.default)(a)),
                a.handleBlur = a.handleBlur.bind((0,
                c.default)(a)),
                a.handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a.handleKeyPress = a.handleKeyPress.bind((0,
                c.default)(a)),
                a.stepForward = a.stepForward.bind((0,
                c.default)(a)),
                a.stepBack = a.stepBack.bind((0,
                c.default)(a)),
                a.calculateDistance = a.calculateDistance.bind((0,
                c.default)(a)),
                a.getProgress = a.getProgress.bind((0,
                c.default)(a)),
                a.renderChildren = a.renderChildren.bind((0,
                c.default)(a)),
                a.state = {
                    active: !1
                },
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("mousemove", this.handleMouseMove, !0),
                    document.removeEventListener("mouseup", this.handleMouseUp, !0),
                    document.removeEventListener("touchmove", this.handleMouseMove, !0),
                    document.removeEventListener("touchend", this.handleMouseUp, !0),
                    document.removeEventListener("keydown", this.handleKeyPress, !0)
                }
            }, {
                key: "getProgress",
                value: function() {
                    var e = this.props.getPercent;
                    if (!e)
                        return 0;
                    var t = e();
                    return ("number" !== typeof t || t < 0 || t === 1 / 0) && (t = 0),
                    t
                }
            }, {
                key: "handleMouseDown",
                value: function(e) {
                    var t = this.props.onMouseDown;
                    document.addEventListener("mousemove", this.handleMouseMove, !0),
                    document.addEventListener("mouseup", this.handleMouseUp, !0),
                    document.addEventListener("touchmove", this.handleMouseMove, !0),
                    document.addEventListener("touchend", this.handleMouseUp, !0),
                    this.setState({
                        active: !0
                    }),
                    this.props.sliderActive && this.props.sliderActive(e),
                    this.handleMouseMove(e),
                    t && t(e)
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    var t = this.props.onMouseMove;
                    t && t(e)
                }
            }, {
                key: "handleMouseUp",
                value: function(e) {
                    e.preventDefault();
                    var t = this.props.onMouseUp;
                    document.removeEventListener("mousemove", this.handleMouseMove, !0),
                    document.removeEventListener("mouseup", this.handleMouseUp, !0),
                    document.removeEventListener("touchmove", this.handleMouseMove, !0),
                    document.removeEventListener("touchend", this.handleMouseUp, !0),
                    this.setState({
                        active: !1
                    }),
                    this.props.sliderInactive && this.props.sliderInactive(e),
                    t && t(e)
                }
            }, {
                key: "handleFocus",
                value: function(e) {
                    document.addEventListener("keydown", this.handleKeyPress, !0),
                    this.props.onFocus && this.props.onFocus(e)
                }
            }, {
                key: "handleBlur",
                value: function(e) {
                    document.removeEventListener("keydown", this.handleKeyPress, !0),
                    this.props.onBlur && this.props.onBlur(e)
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    e.preventDefault(),
                    this.props.onClick && this.props.onClick(e)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    37 === e.which || 40 === e.which ? (e.preventDefault(),
                    e.stopPropagation(),
                    this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(),
                    e.stopPropagation(),
                    this.stepForward())
                }
            }, {
                key: "stepForward",
                value: function() {
                    this.props.stepForward && this.props.stepForward()
                }
            }, {
                key: "stepBack",
                value: function() {
                    this.props.stepBack && this.props.stepBack()
                }
            }, {
                key: "calculateDistance",
                value: function(e) {
                    var t = this.slider
                      , n = h.getPointerPosition(t, e);
                    return this.props.vertical ? n.y : n.x
                }
            }, {
                key: "renderChildren",
                value: function() {
                    var e = this.getProgress()
                      , t = "".concat((100 * e).toFixed(2), "%");
                    return p.default.Children.map(this.props.children, function(n) {
                        return p.default.cloneElement(n, {
                            progress: e,
                            percentage: t
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.vertical
                      , a = t.label
                      , o = t.valuenow
                      , r = t.valuetext;
                    return p.default.createElement("div", {
                        className: (0,
                        f.default)(this.props.className, {
                            "video-react-slider-vertical": n,
                            "video-react-slider-horizontal": !n,
                            "video-react-sliding": this.state.active
                        }, "video-react-slider"),
                        ref: function(t) {
                            e.slider = t
                        },
                        tabIndex: "0",
                        role: "slider",
                        onMouseDown: this.handleMouseDown,
                        onTouchStart: this.handleMouseDown,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur,
                        onClick: this.handleClick,
                        "aria-label": a || "",
                        "aria-valuenow": o || "",
                        "aria-valuetext": r || "",
                        "aria-valuemin": 0,
                        "aria-valuemax": 100
                    }, this.renderChildren())
                }
            }]),
            t
        }(p.Component);
        t.default = v,
        v.propTypes = m,
        v.displayName = "Slider"
    },
    790: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = o(n(791))
          , m = {
            player: d.default.object,
            actions: d.default.object,
            rates: d.default.array,
            className: d.default.string
        }
          , v = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleSelectItem = a.handleSelectItem.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleSelectItem",
                value: function(e) {
                    var t = this.props
                      , n = t.rates
                      , a = t.actions;
                    e >= 0 && e < n.length && a.changeRate(n[e])
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.rates
                      , n = e.player
                      , a = t.map(function(e) {
                        return {
                            label: "".concat(e, "x"),
                            value: e
                        }
                    })
                      , o = t.indexOf(n.playbackRate) || 0;
                    return p.default.createElement(h.default, {
                        className: (0,
                        f.default)("video-react-playback-rate", this.props.className),
                        onSelectItem: this.handleSelectItem,
                        items: a,
                        selectedIndex: o
                    }, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }, "Playback Rate"), p.default.createElement("div", {
                        className: "video-react-playback-rate-value"
                    }, "".concat(n.playbackRate.toFixed(2), "x")))
                }
            }]),
            t
        }(p.Component);
        v.propTypes = m,
        v.defaultProps = {
            rates: [2, 1.5, 1.25, 1, .5, .25]
        },
        v.displayName = "PlaybackRateMenuButton";
        var y = v;
        t.default = y
    },
    791: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = o(n(1014))
          , m = o(n(1015))
          , v = o(n(858))
          , y = {
            inline: d.default.bool,
            items: d.default.array,
            className: d.default.string,
            onSelectItem: d.default.func,
            children: d.default.any,
            selectedIndex: d.default.number
        }
          , b = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).state = {
                    active: !1,
                    activateIndex: e.selectedIndex || 0
                },
                a.commitSelection = a.commitSelection.bind((0,
                c.default)(a)),
                a.activateMenuItem = a.activateMenuItem.bind((0,
                c.default)(a)),
                a.handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a.renderMenu = a.renderMenu.bind((0,
                c.default)(a)),
                a.handleFocus = a.handleFocus.bind((0,
                c.default)(a)),
                a.handleBlur = a.handleBlur.bind((0,
                c.default)(a)),
                a.handleUpArrow = a.handleUpArrow.bind((0,
                c.default)(a)),
                a.handleDownArrow = a.handleDownArrow.bind((0,
                c.default)(a)),
                a.handleEscape = a.handleEscape.bind((0,
                c.default)(a)),
                a.handleReturn = a.handleReturn.bind((0,
                c.default)(a)),
                a.handleTab = a.handleTab.bind((0,
                c.default)(a)),
                a.handleKeyPress = a.handleKeyPress.bind((0,
                c.default)(a)),
                a.handleSelectItem = a.handleSelectItem.bind((0,
                c.default)(a)),
                a.handleIndexChange = a.handleIndexChange.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentDidUpdate",
                value: function(e) {
                    e.selectedIndex !== this.props.selectedIndex && this.activateMenuItem(this.props.selectedIndex)
                }
            }, {
                key: "commitSelection",
                value: function(e) {
                    this.setState({
                        activateIndex: e
                    }),
                    this.handleIndexChange(e)
                }
            }, {
                key: "activateMenuItem",
                value: function(e) {
                    this.setState({
                        activateIndex: e
                    }),
                    this.handleIndexChange(e)
                }
            }, {
                key: "handleIndexChange",
                value: function(e) {
                    (0,
                    this.props.onSelectItem)(e)
                }
            }, {
                key: "handleClick",
                value: function() {
                    this.setState(function(e) {
                        return {
                            active: !e.active
                        }
                    })
                }
            }, {
                key: "handleFocus",
                value: function() {
                    document.addEventListener("keydown", this.handleKeyPress)
                }
            }, {
                key: "handleBlur",
                value: function() {
                    this.setState({
                        active: !1
                    }),
                    document.removeEventListener("keydown", this.handleKeyPress)
                }
            }, {
                key: "handleUpArrow",
                value: function(e) {
                    var t = this.props.items;
                    if (this.state.active) {
                        e.preventDefault();
                        var n = this.state.activateIndex - 1;
                        n < 0 && (n = t.length ? t.length - 1 : 0),
                        this.activateMenuItem(n)
                    }
                }
            }, {
                key: "handleDownArrow",
                value: function(e) {
                    var t = this.props.items;
                    if (this.state.active) {
                        e.preventDefault();
                        var n = this.state.activateIndex + 1;
                        n >= t.length && (n = 0),
                        this.activateMenuItem(n)
                    }
                }
            }, {
                key: "handleTab",
                value: function(e) {
                    this.state.active && (e.preventDefault(),
                    this.commitSelection(this.state.activateIndex))
                }
            }, {
                key: "handleReturn",
                value: function(e) {
                    e.preventDefault(),
                    this.state.active ? this.commitSelection(this.state.activateIndex) : this.setState({
                        active: !0
                    })
                }
            }, {
                key: "handleEscape",
                value: function() {
                    this.setState({
                        active: !1,
                        activateIndex: 0
                    })
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    27 === e.which ? this.handleEscape(e) : 9 === e.which ? this.handleTab(e) : 13 === e.which ? this.handleReturn(e) : 38 === e.which ? this.handleUpArrow(e) : 40 === e.which && this.handleDownArrow(e)
                }
            }, {
                key: "handleSelectItem",
                value: function(e) {
                    this.commitSelection(e)
                }
            }, {
                key: "renderMenu",
                value: function() {
                    var e = this;
                    if (!this.state.active)
                        return null;
                    var t = this.props.items;
                    return p.default.createElement(h.default, null, t.map(function(t, n) {
                        return p.default.createElement(m.default, {
                            item: t,
                            index: n,
                            onSelectItem: e.handleSelectItem,
                            activateIndex: e.state.activateIndex,
                            key: "item-".concat(n++)
                        })
                    }))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.inline
                      , a = t.className;
                    return p.default.createElement(v.default, {
                        className: (0,
                        f.default)(a, {
                            "video-react-menu-button-inline": !!n,
                            "video-react-menu-button-popup": !n,
                            "video-react-menu-button-active": this.state.active
                        }, "video-react-control video-react-button video-react-menu-button"),
                        role: "button",
                        tabIndex: "0",
                        ref: function(t) {
                            e.menuButton = t
                        },
                        onClick: this.handleClick,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, this.props.children, this.renderMenu())
                }
            }]),
            t
        }(p.Component);
        t.default = b,
        b.propTypes = y,
        b.displayName = "MenuButton"
    },
    831: function(e, t) {
        function n(t) {
            return "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? (e.exports = n = function(e) {
                return typeof e
            }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0) : (e.exports = n = function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            e.exports.default = e.exports,
            e.exports.__esModule = !0),
            n(t)
        }
        e.exports = n,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    832: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return {
                player: (0,
                o.default)(e.player, t),
                operation: (0,
                r.default)(e.operation, t)
            }
        }
        ,
        t.operationReducer = t.playerReducer = void 0;
        var o = a(n(1004))
          , r = a(n(1005));
        var i = o.default;
        t.playerReducer = i;
        var s = r.default;
        t.operationReducer = s
    },
    833: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(583))
          , r = a(n(584))
          , i = new (function() {
            function e() {
                (0,
                o.default)(this, e)
            }
            return (0,
            r.default)(e, [{
                key: "request",
                value: function(e) {
                    e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                }
            }, {
                key: "exit",
                value: function() {
                    document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen()
                }
            }, {
                key: "addEventListener",
                value: function(e) {
                    document.addEventListener("fullscreenchange", e),
                    document.addEventListener("webkitfullscreenchange", e),
                    document.addEventListener("mozfullscreenchange", e),
                    document.addEventListener("MSFullscreenChange", e)
                }
            }, {
                key: "removeEventListener",
                value: function(e) {
                    document.removeEventListener("fullscreenchange", e),
                    document.removeEventListener("webkitfullscreenchange", e),
                    document.removeEventListener("mozfullscreenchange", e),
                    document.removeEventListener("MSFullscreenChange", e)
                }
            }, {
                key: "isFullscreen",
                get: function() {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                }
            }, {
                key: "enabled",
                get: function() {
                    return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled
                }
            }]),
            e
        }());
        t.default = i
    },
    834: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = {
            actions: d.default.object,
            player: d.default.object,
            position: d.default.string,
            className: d.default.string
        }
          , m = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "handleClick",
                value: function() {
                    this.props.actions.play()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.player
                      , n = e.position;
                    return p.default.createElement("button", {
                        className: (0,
                        f.default)("video-react-big-play-button", "video-react-big-play-button-".concat(n), this.props.className, {
                            "big-play-button-hide": t.hasStarted || !t.currentSrc
                        }),
                        type: "button",
                        "aria-live": "polite",
                        tabIndex: "0",
                        onClick: this.handleClick
                    }, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }, "Play Video"))
                }
            }]),
            t
        }(p.Component);
        t.default = m,
        m.propTypes = h,
        m.defaultProps = {
            position: "left"
        },
        m.displayName = "BigPlayButton"
    },
    835: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = l;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = {
            player: o.default.object,
            className: o.default.string
        };
        function l(e) {
            var t = e.player
              , n = e.className;
            return t.error ? null : r.default.createElement("div", {
                className: (0,
                i.default)("video-react-loading-spinner", n)
            })
        }
        l.propTypes = s,
        l.displayName = "LoadingSpinner"
    },
    836: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = {
            poster: o.default.string,
            player: o.default.object,
            actions: o.default.object,
            className: o.default.string
        };
        function l(e) {
            var t = e.poster
              , n = e.player
              , a = e.actions
              , o = e.className;
            return !t || n.hasStarted ? null : r.default.createElement("div", {
                className: (0,
                i.default)("video-react-poster", o),
                style: {
                    backgroundImage: 'url("'.concat(t, '")')
                },
                onClick: function() {
                    n.paused && a.play()
                }
            })
        }
        l.propTypes = s,
        l.displayName = "PosterImage";
        var c = l;
        t.default = c
    },
    837: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(647))
          , i = o(n(583))
          , s = o(n(584))
          , l = o(n(586))
          , c = o(n(588))
          , u = o(n(587))
          , d = o(n(589))
          , p = o(n(2))
          , f = a(n(0))
          , h = o(n(52))
          , m = n(630)
          , v = {
            actions: p.default.object,
            player: p.default.object,
            children: p.default.any,
            startTime: p.default.number,
            loop: p.default.bool,
            muted: p.default.bool,
            autoPlay: p.default.bool,
            playsInline: p.default.bool,
            src: p.default.string,
            poster: p.default.string,
            className: p.default.string,
            preload: p.default.oneOf(["auto", "metadata", "none"]),
            crossOrigin: p.default.string,
            onLoadStart: p.default.func,
            onWaiting: p.default.func,
            onCanPlay: p.default.func,
            onCanPlayThrough: p.default.func,
            onPlaying: p.default.func,
            onEnded: p.default.func,
            onSeeking: p.default.func,
            onSeeked: p.default.func,
            onPlay: p.default.func,
            onPause: p.default.func,
            onProgress: p.default.func,
            onDurationChange: p.default.func,
            onError: p.default.func,
            onSuspend: p.default.func,
            onAbort: p.default.func,
            onEmptied: p.default.func,
            onStalled: p.default.func,
            onLoadedMetadata: p.default.func,
            onLoadedData: p.default.func,
            onTimeUpdate: p.default.func,
            onRateChange: p.default.func,
            onVolumeChange: p.default.func,
            onResize: p.default.func
        }
          , y = function(e) {
            function t(e) {
                var n;
                return (0,
                i.default)(this, t),
                (n = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e))).video = null,
                n.play = n.play.bind((0,
                u.default)(n)),
                n.pause = n.pause.bind((0,
                u.default)(n)),
                n.seek = n.seek.bind((0,
                u.default)(n)),
                n.forward = n.forward.bind((0,
                u.default)(n)),
                n.replay = n.replay.bind((0,
                u.default)(n)),
                n.toggleFullscreen = n.toggleFullscreen.bind((0,
                u.default)(n)),
                n.getProperties = n.getProperties.bind((0,
                u.default)(n)),
                n.renderChildren = n.renderChildren.bind((0,
                u.default)(n)),
                n.handleLoadStart = n.handleLoadStart.bind((0,
                u.default)(n)),
                n.handleCanPlay = n.handleCanPlay.bind((0,
                u.default)(n)),
                n.handleCanPlayThrough = n.handleCanPlayThrough.bind((0,
                u.default)(n)),
                n.handlePlay = n.handlePlay.bind((0,
                u.default)(n)),
                n.handlePlaying = n.handlePlaying.bind((0,
                u.default)(n)),
                n.handlePause = n.handlePause.bind((0,
                u.default)(n)),
                n.handleEnded = n.handleEnded.bind((0,
                u.default)(n)),
                n.handleWaiting = n.handleWaiting.bind((0,
                u.default)(n)),
                n.handleSeeking = n.handleSeeking.bind((0,
                u.default)(n)),
                n.handleSeeked = n.handleSeeked.bind((0,
                u.default)(n)),
                n.handleFullscreenChange = n.handleFullscreenChange.bind((0,
                u.default)(n)),
                n.handleError = n.handleError.bind((0,
                u.default)(n)),
                n.handleSuspend = n.handleSuspend.bind((0,
                u.default)(n)),
                n.handleAbort = n.handleAbort.bind((0,
                u.default)(n)),
                n.handleEmptied = n.handleEmptied.bind((0,
                u.default)(n)),
                n.handleStalled = n.handleStalled.bind((0,
                u.default)(n)),
                n.handleLoadedMetaData = n.handleLoadedMetaData.bind((0,
                u.default)(n)),
                n.handleLoadedData = n.handleLoadedData.bind((0,
                u.default)(n)),
                n.handleTimeUpdate = n.handleTimeUpdate.bind((0,
                u.default)(n)),
                n.handleRateChange = n.handleRateChange.bind((0,
                u.default)(n)),
                n.handleVolumeChange = n.handleVolumeChange.bind((0,
                u.default)(n)),
                n.handleDurationChange = n.handleDurationChange.bind((0,
                u.default)(n)),
                n.handleProgress = (0,
                m.throttle)(n.handleProgress.bind((0,
                u.default)(n)), 250),
                n.handleKeypress = n.handleKeypress.bind((0,
                u.default)(n)),
                n.handleTextTrackChange = n.handleTextTrackChange.bind((0,
                u.default)(n)),
                n
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.forceUpdate(),
                    this.video && this.video.textTracks && (this.video.textTracks.onaddtrack = this.handleTextTrackChange,
                    this.video.textTracks.onremovetrack = this.handleTextTrackChange)
                }
            }, {
                key: "getProperties",
                value: function() {
                    var e = this;
                    return this.video ? m.mediaProperties.reduce(function(t, n) {
                        return t[n] = e.video[n],
                        t
                    }, {}) : null
                }
            }, {
                key: "handleTextTrackChange",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.player;
                    if (this.video && this.video.textTracks) {
                        var a = Array.from(this.video.textTracks).find(function(e) {
                            return "showing" === e.mode
                        });
                        a !== n.activeTextTrack && t.activateTextTrack(a)
                    }
                }
            }, {
                key: "play",
                value: function() {
                    var e = this.video.play();
                    void 0 !== e && e.catch(function() {}).then(function() {})
                }
            }, {
                key: "pause",
                value: function() {
                    var e = this.video.pause();
                    void 0 !== e && e.catch(function() {}).then(function() {})
                }
            }, {
                key: "load",
                value: function() {
                    this.video.load()
                }
            }, {
                key: "addTextTrack",
                value: function() {
                    var e;
                    (e = this.video).addTextTrack.apply(e, arguments)
                }
            }, {
                key: "canPlayType",
                value: function() {
                    var e;
                    (e = this.video).canPlayType.apply(e, arguments)
                }
            }, {
                key: "togglePlay",
                value: function() {
                    this.video.paused ? this.play() : this.pause()
                }
            }, {
                key: "seek",
                value: function(e) {
                    try {
                        this.video.currentTime = e
                    } catch (t) {}
                }
            }, {
                key: "forward",
                value: function(e) {
                    this.seek(this.video.currentTime + e)
                }
            }, {
                key: "replay",
                value: function(e) {
                    this.forward(-e)
                }
            }, {
                key: "toggleFullscreen",
                value: function() {
                    var e = this.props
                      , t = e.player;
                    e.actions.toggleFullscreen(t)
                }
            }, {
                key: "handleLoadStart",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onLoadStart;
                    t.handleLoadStart(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleCanPlay",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onCanPlay;
                    t.handleCanPlay(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleCanPlayThrough",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onCanPlayThrough;
                    t.handleCanPlayThrough(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handlePlaying",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onPlaying;
                    t.handlePlaying(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handlePlay",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onPlay;
                    t.handlePlay(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handlePause",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onPause;
                    t.handlePause(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleDurationChange",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onDurationChange;
                    t.handleDurationChange(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleProgress",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onProgress;
                    this.video && t.handleProgressChange(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleEnded",
                value: function() {
                    var e = this.props
                      , t = e.loop
                      , n = e.player
                      , a = e.actions
                      , o = e.onEnded;
                    t ? (this.seek(0),
                    this.play()) : n.paused || this.pause(),
                    a.handleEnd(this.getProperties()),
                    o && o.apply(void 0, arguments)
                }
            }, {
                key: "handleWaiting",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onWaiting;
                    t.handleWaiting(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleSeeking",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onSeeking;
                    t.handleSeeking(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleSeeked",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onSeeked;
                    t.handleSeeked(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleFullscreenChange",
                value: function() {}
            }, {
                key: "handleSuspend",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onSuspend;
                    t.handleSuspend(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleAbort",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onAbort;
                    t.handleAbort(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleEmptied",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onEmptied;
                    t.handleEmptied(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleStalled",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onStalled;
                    t.handleStalled(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleLoadedMetaData",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onLoadedMetadata
                      , a = e.startTime;
                    a && a > 0 && (this.video.currentTime = a),
                    t.handleLoadedMetaData(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleLoadedData",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onLoadedData;
                    t.handleLoadedData(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleTimeUpdate",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onTimeUpdate;
                    t.handleTimeUpdate(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleRateChange",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onRateChange;
                    t.handleRateChange(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleVolumeChange",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onVolumeChange;
                    t.handleVolumeChange(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleError",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onError;
                    t.handleError(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleResize",
                value: function() {
                    var e = this.props
                      , t = e.actions
                      , n = e.onResize;
                    t.handleResize(this.getProperties()),
                    n && n.apply(void 0, arguments)
                }
            }, {
                key: "handleKeypress",
                value: function() {}
            }, {
                key: "renderChildren",
                value: function() {
                    var e = this
                      , t = (0,
                    r.default)({}, this.props, {
                        video: this.video
                    });
                    return this.video ? f.default.Children.toArray(this.props.children).filter(m.isVideoChild).map(function(n) {
                        var a;
                        if ("string" === typeof n.type) {
                            if ("source" === n.type) {
                                var o = (a = (0,
                                r.default)({}, n.props)).onError;
                                a.onError = function() {
                                    o && o.apply(void 0, arguments),
                                    e.handleError.apply(e, arguments)
                                }
                            }
                        } else
                            a = t;
                        return f.default.cloneElement(n, a)
                    }) : null
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.loop
                      , a = t.poster
                      , o = t.preload
                      , r = t.src
                      , i = t.autoPlay
                      , s = t.playsInline
                      , l = t.muted
                      , c = t.crossOrigin
                      , u = t.videoId;
                    return f.default.createElement("video", {
                        className: (0,
                        h.default)("video-react-video", this.props.className),
                        id: u,
                        crossOrigin: c,
                        ref: function(t) {
                            e.video = t
                        },
                        muted: l,
                        preload: o,
                        loop: n,
                        playsInline: s,
                        autoPlay: i,
                        poster: a,
                        src: r,
                        onLoadStart: this.handleLoadStart,
                        onWaiting: this.handleWaiting,
                        onCanPlay: this.handleCanPlay,
                        onCanPlayThrough: this.handleCanPlayThrough,
                        onPlaying: this.handlePlaying,
                        onEnded: this.handleEnded,
                        onSeeking: this.handleSeeking,
                        onSeeked: this.handleSeeked,
                        onPlay: this.handlePlay,
                        onPause: this.handlePause,
                        onProgress: this.handleProgress,
                        onDurationChange: this.handleDurationChange,
                        onError: this.handleError,
                        onSuspend: this.handleSuspend,
                        onAbort: this.handleAbort,
                        onEmptied: this.handleEmptied,
                        onStalled: this.handleStalled,
                        onLoadedMetadata: this.handleLoadedMetaData,
                        onLoadedData: this.handleLoadedData,
                        onTimeUpdate: this.handleTimeUpdate,
                        onRateChange: this.handleRateChange,
                        onVolumeChange: this.handleVolumeChange,
                        tabIndex: "-1"
                    }, this.renderChildren())
                }
            }, {
                key: "playbackRate",
                get: function() {
                    return this.video.playbackRate
                },
                set: function(e) {
                    this.video.playbackRate = e
                }
            }, {
                key: "muted",
                get: function() {
                    return this.video.muted
                },
                set: function(e) {
                    this.video.muted = e
                }
            }, {
                key: "volume",
                get: function() {
                    return this.video.volume
                },
                set: function(e) {
                    e > 1 && (e = 1),
                    e < 0 && (e = 0),
                    this.video.volume = e
                }
            }, {
                key: "videoWidth",
                get: function() {
                    return this.video.videoWidth
                }
            }, {
                key: "videoHeight",
                get: function() {
                    return this.video.videoHeight
                }
            }]),
            t
        }(f.Component);
        t.default = y,
        y.propTypes = v,
        y.displayName = "Video"
    },
    838: function(e, t, n) {
        var a = n(1006)
          , o = n(1007)
          , r = n(1008)
          , i = n(1009);
        e.exports = function(e) {
            return a(e) || o(e) || r(e) || i()
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    839: function(e, t) {
        e.exports = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, a = new Array(t); n < t; n++)
                a[n] = e[n];
            return a
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    840: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = {
            manager: d.default.object,
            className: d.default.string
        }
          , m = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).timer = null,
                e.manager.subscribeToOperationStateChange(a.handleStateChange.bind((0,
                c.default)(a))),
                a.state = {
                    hidden: !0,
                    operation: {}
                },
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleStateChange",
                value: function(e, t) {
                    var n = this;
                    e.count !== t.count && "shortcut" === e.operation.source && (this.timer && (clearTimeout(this.timer),
                    this.timer = null),
                    this.setState({
                        hidden: !1,
                        count: e.count,
                        operation: e.operation
                    }),
                    this.timer = setTimeout(function() {
                        n.setState({
                            hidden: !0
                        }),
                        n.timer = null
                    }, 500))
                }
            }, {
                key: "render",
                value: function() {
                    if ("shortcut" !== this.state.operation.source)
                        return null;
                    var e = this.state.hidden ? {
                        display: "none"
                    } : null;
                    return p.default.createElement("div", {
                        className: (0,
                        f.default)({
                            "video-react-bezel": !0,
                            "video-react-bezel-animation": this.state.count % 2 === 0,
                            "video-react-bezel-animation-alt": this.state.count % 2 === 1
                        }, this.props.className),
                        style: e,
                        role: "status",
                        "aria-label": this.state.operation.action
                    }, p.default.createElement("div", {
                        className: (0,
                        f.default)("video-react-bezel-icon", "video-react-bezel-icon-".concat(this.state.operation.action))
                    }))
                }
            }]),
            t
        }(p.Component);
        t.default = m,
        m.propTypes = h,
        m.displayName = "Bezel"
    },
    841: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(787))
          , r = a(n(838))
          , i = a(n(583))
          , s = a(n(584))
          , l = a(n(586))
          , c = a(n(588))
          , u = a(n(587))
          , d = a(n(589))
          , p = n(0)
          , f = a(n(2))
          , h = n(746)
          , m = {
            clickable: f.default.bool,
            dblclickable: f.default.bool,
            manager: f.default.object,
            actions: f.default.object,
            player: f.default.object,
            shortcuts: f.default.array
        }
          , v = function(e) {
            function t(e, n) {
                var a;
                return (0,
                i.default)(this, t),
                (a = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e, n))).defaultShortcuts = [{
                    keyCode: 32,
                    handle: a.togglePlay
                }, {
                    keyCode: 75,
                    handle: a.togglePlay
                }, {
                    keyCode: 70,
                    handle: a.toggleFullscreen
                }, {
                    keyCode: 37,
                    handle: function(e, t) {
                        e.hasStarted && t.replay(5, {
                            action: "replay-5",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 74,
                    handle: function(e, t) {
                        e.hasStarted && t.replay(10, {
                            action: "replay-10",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 39,
                    handle: function(e, t) {
                        e.hasStarted && t.forward(5, {
                            action: "forward-5",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 76,
                    handle: function(e, t) {
                        e.hasStarted && t.forward(10, {
                            action: "forward-10",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 36,
                    handle: function(e, t) {
                        e.hasStarted && t.seek(0)
                    }
                }, {
                    keyCode: 35,
                    handle: function(e, t) {
                        e.hasStarted && t.seek(e.duration)
                    }
                }, {
                    keyCode: 38,
                    handle: function(e, t) {
                        var n = e.volume + .05;
                        n > 1 && (n = 1),
                        t.changeVolume(n, {
                            action: "volume-up",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 40,
                    handle: function(e, t) {
                        var n = e.volume - .05;
                        n < 0 && (n = 0);
                        var a = n > 0 ? "volume-down" : "volume-off";
                        t.changeVolume(n, {
                            action: a,
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 190,
                    shift: !0,
                    handle: function(e, t) {
                        var n = e.playbackRate;
                        n >= 1.5 ? n = 2 : n >= 1.25 ? n = 1.5 : n >= 1 ? n = 1.25 : n >= .5 ? n = 1 : n >= .25 ? n = .5 : n >= 0 && (n = .25),
                        t.changeRate(n, {
                            action: "fast-forward",
                            source: "shortcut"
                        })
                    }
                }, {
                    keyCode: 188,
                    shift: !0,
                    handle: function(e, t) {
                        var n = e.playbackRate;
                        n <= .5 ? n = .25 : n <= 1 ? n = .5 : n <= 1.25 ? n = 1 : n <= 1.5 ? n = 1.25 : n <= 2 && (n = 1.5),
                        t.changeRate(n, {
                            action: "fast-rewind",
                            source: "shortcut"
                        })
                    }
                }],
                a.shortcuts = (0,
                r.default)(a.defaultShortcuts),
                a.mergeShortcuts = a.mergeShortcuts.bind((0,
                u.default)(a)),
                a.handleKeyPress = a.handleKeyPress.bind((0,
                u.default)(a)),
                a.handleClick = a.handleClick.bind((0,
                u.default)(a)),
                a.handleDoubleClick = a.handleDoubleClick.bind((0,
                u.default)(a)),
                a
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "componentDidMount",
                value: function() {
                    this.mergeShortcuts(),
                    document.addEventListener("keydown", this.handleKeyPress),
                    document.addEventListener("click", this.handleClick),
                    document.addEventListener("dblclick", this.handleDoubleClick)
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    e.shortcuts !== this.props.shortcuts && this.mergeShortcuts()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("keydown", this.handleKeyPress),
                    document.removeEventListener("click", this.handleClick),
                    document.removeEventListener("dblclick", this.handleDoubleClick)
                }
            }, {
                key: "mergeShortcuts",
                value: function() {
                    var e = function(e) {
                        var t = e.keyCode
                          , n = void 0 === t ? 0 : t
                          , a = e.ctrl
                          , o = void 0 !== a && a
                          , r = e.shift
                          , i = void 0 !== r && r
                          , s = e.alt
                          , l = void 0 !== s && s;
                        return "".concat(n, ":").concat(o, ":").concat(i, ":").concat(l)
                    }
                      , t = this.defaultShortcuts.reduce(function(t, n) {
                        return Object.assign(t, (0,
                        o.default)({}, e(n), n))
                    }, {})
                      , n = (this.props.shortcuts || []).reduce(function(t, n) {
                        var a = n.keyCode
                          , r = n.handle;
                        return a && "function" === typeof r ? Object.assign(t, (0,
                        o.default)({}, e(n), n)) : t
                    }, t)
                      , a = function(e) {
                        var t = 0;
                        return ["ctrl", "shift", "alt"].forEach(function(n) {
                            e[n] && t++
                        }),
                        t
                    };
                    this.shortcuts = Object.keys(n).map(function(e) {
                        return n[e]
                    }).sort(function(e, t) {
                        return a(t) - a(e)
                    })
                }
            }, {
                key: "togglePlay",
                value: function(e, t) {
                    e.paused ? t.play({
                        action: "play",
                        source: "shortcut"
                    }) : t.pause({
                        action: "pause",
                        source: "shortcut"
                    })
                }
            }, {
                key: "toggleFullscreen",
                value: function(e, t) {
                    t.toggleFullscreen(e)
                }
            }, {
                key: "handleKeyPress",
                value: function(e) {
                    var t = this.props
                      , n = t.player
                      , a = t.actions;
                    if (n.isActive && (!document.activeElement || !((0,
                    h.hasClass)(document.activeElement, "video-react-control") || (0,
                    h.hasClass)(document.activeElement, "video-react-menu-button-active") || (0,
                    h.hasClass)(document.activeElement, "video-react-big-play-button")))) {
                        var o = e.keyCode || e.which
                          , r = e.ctrlKey || e.metaKey
                          , i = e.shiftKey
                          , s = e.altKey
                          , l = this.shortcuts.filter(function(e) {
                            return !(!e.keyCode || e.keyCode - o !== 0) && !(void 0 !== e.ctrl && e.ctrl !== r || void 0 !== e.shift && e.shift !== i || void 0 !== e.alt && e.alt !== s)
                        })[0];
                        l && (l.handle(n, a),
                        e.preventDefault())
                    }
                }
            }, {
                key: "canBeClicked",
                value: function(e, t) {
                    return !(!e.isActive || "VIDEO" !== t.target.nodeName || 4 !== e.readyState)
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    var t = this.props
                      , n = t.player
                      , a = t.actions
                      , o = t.clickable;
                    this.canBeClicked(n, e) && o && this.togglePlay(n, a)
                }
            }, {
                key: "handleDoubleClick",
                value: function(e) {
                    var t = this.props
                      , n = t.player
                      , a = t.actions
                      , o = t.dblclickable;
                    this.canBeClicked(n, e) && o && this.toggleFullscreen(n, a)
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            t
        }(p.Component);
        t.default = v,
        v.propTypes = m,
        v.defaultProps = {
            clickable: !0,
            dblclickable: !0
        },
        v.displayName = "Shortcut"
    },
    842: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(788))
          , i = o(n(583))
          , s = o(n(584))
          , l = o(n(586))
          , c = o(n(588))
          , u = o(n(587))
          , d = o(n(589))
          , p = o(n(2))
          , f = a(n(0))
          , h = o(n(52))
          , m = o(n(843))
          , v = o(n(848))
          , y = o(n(849))
          , b = o(n(851))
          , g = o(n(852))
          , k = o(n(853))
          , S = o(n(854))
          , E = o(n(855))
          , A = o(n(856))
          , w = o(n(857))
          , C = o(n(790))
          , O = n(630)
          , T = {
            children: p.default.any,
            autoHide: p.default.bool,
            autoHideTime: p.default.number,
            disableDefaultControls: p.default.bool,
            disableCompletely: p.default.bool,
            className: p.default.string
        }
          , P = function(e) {
            function t(e) {
                var n;
                return (0,
                i.default)(this, t),
                (n = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e))).getDefaultChildren = n.getDefaultChildren.bind((0,
                u.default)(n)),
                n.getFullChildren = n.getFullChildren.bind((0,
                u.default)(n)),
                n
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "getDefaultChildren",
                value: function() {
                    return [f.default.createElement(v.default, {
                        key: "play-toggle",
                        order: 1
                    }), f.default.createElement(w.default, {
                        key: "volume-menu-button",
                        order: 4
                    }), f.default.createElement(S.default, {
                        key: "current-time-display",
                        order: 5.1
                    }), f.default.createElement(A.default, {
                        key: "time-divider",
                        order: 5.2
                    }), f.default.createElement(E.default, {
                        key: "duration-display",
                        order: 5.3
                    }), f.default.createElement(m.default, {
                        key: "progress-control",
                        order: 6
                    }), f.default.createElement(g.default, {
                        key: "fullscreen-toggle",
                        order: 8
                    })]
                }
            }, {
                key: "getFullChildren",
                value: function() {
                    return [f.default.createElement(v.default, {
                        key: "play-toggle",
                        order: 1
                    }), f.default.createElement(b.default, {
                        key: "replay-control",
                        order: 2
                    }), f.default.createElement(y.default, {
                        key: "forward-control",
                        order: 3
                    }), f.default.createElement(w.default, {
                        key: "volume-menu-button",
                        order: 4
                    }), f.default.createElement(S.default, {
                        key: "current-time-display",
                        order: 5
                    }), f.default.createElement(A.default, {
                        key: "time-divider",
                        order: 6
                    }), f.default.createElement(E.default, {
                        key: "duration-display",
                        order: 7
                    }), f.default.createElement(m.default, {
                        key: "progress-control",
                        order: 8
                    }), f.default.createElement(k.default, {
                        key: "remaining-time-display",
                        order: 9
                    }), f.default.createElement(C.default, {
                        rates: [1, 1.25, 1.5, 2],
                        key: "playback-rate",
                        order: 10
                    }), f.default.createElement(g.default, {
                        key: "fullscreen-toggle",
                        order: 11
                    })]
                }
            }, {
                key: "getChildren",
                value: function() {
                    var e = f.default.Children.toArray(this.props.children)
                      , t = this.props.disableDefaultControls ? [] : this.getDefaultChildren()
                      , n = this.props
                      , a = (n.className,
                    (0,
                    r.default)(n, ["className"]));
                    return (0,
                    O.mergeAndSortChildren)(t, e, a)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.autoHide
                      , n = e.className
                      , a = e.disableCompletely
                      , o = this.getChildren();
                    return a ? null : f.default.createElement("div", {
                        className: (0,
                        h.default)("video-react-control-bar", {
                            "video-react-control-bar-auto-hide": t
                        }, n)
                    }, o)
                }
            }]),
            t
        }(f.Component);
        t.default = P,
        P.propTypes = T,
        P.defaultProps = {
            autoHide: !0,
            disableCompletely: !1
        },
        P.displayName = "ControlBar"
    },
    843: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(695))
          , i = o(n(583))
          , s = o(n(584))
          , l = o(n(586))
          , c = o(n(588))
          , u = o(n(587))
          , d = o(n(589))
          , p = o(n(2))
          , f = a(n(0))
          , h = o(n(52))
          , m = a(n(746))
          , v = o(n(844))
          , y = {
            player: p.default.object,
            className: p.default.string
        }
          , b = function(e) {
            function t(e, n) {
                var a;
                return (0,
                i.default)(this, t),
                (a = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e, n))).state = {
                    mouseTime: {
                        time: null,
                        position: 0
                    }
                },
                a.handleMouseMoveThrottle = a.handleMouseMove.bind((0,
                u.default)(a)),
                a
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "handleMouseMove",
                value: function(e) {
                    if (e.pageX) {
                        var t = this.props.player.duration
                          , n = this.seekBar
                          , a = m.getPointerPosition(n, e).x * t
                          , o = e.pageX - m.findElPosition(n).left;
                        this.setState({
                            mouseTime: {
                                time: a,
                                position: o
                            }
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props.className;
                    return f.default.createElement("div", {
                        onMouseMove: this.handleMouseMoveThrottle,
                        className: (0,
                        h.default)("video-react-progress-control video-react-control", t)
                    }, f.default.createElement(v.default, (0,
                    r.default)({
                        mouseTime: this.state.mouseTime,
                        ref: function(t) {
                            e.seekBar = t
                        }
                    }, this.props)))
                }
            }]),
            t
        }(f.Component);
        t.default = b,
        b.propTypes = y,
        b.displayName = "ProgressControl"
    },
    844: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = o(n(789))
          , m = o(n(845))
          , v = o(n(846))
          , y = o(n(847))
          , b = n(630)
          , g = {
            player: d.default.object,
            mouseTime: d.default.object,
            actions: d.default.object,
            className: d.default.string
        }
          , k = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).getPercent = a.getPercent.bind((0,
                c.default)(a)),
                a.getNewTime = a.getNewTime.bind((0,
                c.default)(a)),
                a.stepForward = a.stepForward.bind((0,
                c.default)(a)),
                a.stepBack = a.stepBack.bind((0,
                c.default)(a)),
                a.handleMouseDown = a.handleMouseDown.bind((0,
                c.default)(a)),
                a.handleMouseMove = a.handleMouseMove.bind((0,
                c.default)(a)),
                a.handleMouseUp = a.handleMouseUp.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "componentDidMount",
                value: function() {}
            }, {
                key: "componentDidUpdate",
                value: function() {}
            }, {
                key: "getPercent",
                value: function() {
                    var e = this.props.player
                      , t = e.currentTime
                      , n = (e.seekingTime || t) / e.duration;
                    return n >= 1 ? 1 : n
                }
            }, {
                key: "getNewTime",
                value: function(e) {
                    var t = this.props.player.duration
                      , n = this.slider.calculateDistance(e) * t;
                    return n === t ? n - .1 : n
                }
            }, {
                key: "handleMouseDown",
                value: function() {}
            }, {
                key: "handleMouseUp",
                value: function(e) {
                    var t = this.props.actions
                      , n = this.getNewTime(e);
                    t.seek(n),
                    t.handleEndSeeking(n)
                }
            }, {
                key: "handleMouseMove",
                value: function(e) {
                    var t = this.props.actions
                      , n = this.getNewTime(e);
                    t.handleSeekingTime(n)
                }
            }, {
                key: "stepForward",
                value: function() {
                    this.props.actions.forward(5)
                }
            }, {
                key: "stepBack",
                value: function() {
                    this.props.actions.replay(5)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.player
                      , a = n.currentTime
                      , o = n.seekingTime
                      , r = n.duration
                      , i = n.buffered
                      , s = t.mouseTime
                      , l = o || a;
                    return p.default.createElement(h.default, {
                        ref: function(t) {
                            e.slider = t
                        },
                        label: "video progress bar",
                        className: (0,
                        f.default)("video-react-progress-holder", this.props.className),
                        valuenow: (100 * this.getPercent()).toFixed(2),
                        valuetext: (0,
                        b.formatTime)(l, r),
                        onMouseDown: this.handleMouseDown,
                        onMouseMove: this.handleMouseMove,
                        onMouseUp: this.handleMouseUp,
                        getPercent: this.getPercent,
                        stepForward: this.stepForward,
                        stepBack: this.stepBack
                    }, p.default.createElement(v.default, {
                        buffered: i,
                        currentTime: l,
                        duration: r
                    }), p.default.createElement(y.default, {
                        duration: r,
                        mouseTime: s
                    }), p.default.createElement(m.default, {
                        currentTime: l,
                        duration: r
                    }))
                }
            }]),
            t
        }(p.Component);
        t.default = k,
        k.propTypes = g,
        k.displayName = "SeekBar"
    },
    845: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = c;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = n(630)
          , l = {
            currentTime: o.default.number,
            duration: o.default.number,
            percentage: o.default.string,
            className: o.default.string
        };
        function c(e) {
            var t = e.currentTime
              , n = e.duration
              , a = e.percentage
              , o = e.className;
            return r.default.createElement("div", {
                "data-current-time": (0,
                s.formatTime)(t, n),
                className: (0,
                i.default)("video-react-play-progress video-react-slider-bar", o),
                style: {
                    width: a
                }
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }, "Progress: ".concat(a)))
        }
        c.propTypes = l,
        c.displayName = "PlayProgressBar"
    },
    846: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = l;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = {
            duration: o.default.number,
            buffered: o.default.object,
            className: o.default.string
        };
        function l(e) {
            var t = e.buffered
              , n = e.duration
              , a = e.className;
            if (!t || !t.length)
                return null;
            var o = t.end(t.length - 1)
              , s = {};
            function l(e, t) {
                var n = e / t || 0;
                return "".concat(100 * (n >= 1 ? 1 : n), "%")
            }
            o > n && (o = n),
            s.width = l(o, n);
            for (var c = [], u = 0; u < t.length; u++) {
                var d = t.start(u)
                  , p = t.end(u)
                  , f = r.default.createElement("div", {
                    style: {
                        left: l(d, o),
                        width: l(p - d, o)
                    },
                    key: "part-".concat(u)
                });
                c.push(f)
            }
            return 0 === c.length && (c = null),
            r.default.createElement("div", {
                style: s,
                className: (0,
                i.default)("video-react-load-progress", a)
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }, "Loaded: 0%"), c)
        }
        l.propTypes = s,
        l.displayName = "LoadProgressBar"
    },
    847: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = n(630);
        function l(e) {
            var t = e.duration
              , n = e.mouseTime
              , a = e.className
              , o = e.text;
            if (!n.time)
                return null;
            var l = o || (0,
            s.formatTime)(n.time, t);
            return r.default.createElement("div", {
                className: (0,
                i.default)("video-react-mouse-display", a),
                style: {
                    left: "".concat(n.position, "px")
                },
                "data-current-time": l
            })
        }
        l.propTypes = {
            duration: o.default.number,
            mouseTime: o.default.object,
            className: o.default.string
        },
        l.displayName = "MouseTimeDisplay";
        var c = l;
        t.default = c
    },
    848: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = {
            actions: d.default.object,
            player: d.default.object,
            className: d.default.string
        }
          , m = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleClick",
                value: function() {
                    var e = this.props
                      , t = e.actions;
                    e.player.paused ? t.play() : t.pause()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.player
                      , a = t.className
                      , o = n.paused ? "Play" : "Pause";
                    return p.default.createElement("button", {
                        ref: function(t) {
                            e.button = t
                        },
                        className: (0,
                        f.default)(a, {
                            "video-react-play-control": !0,
                            "video-react-control": !0,
                            "video-react-button": !0,
                            "video-react-paused": n.paused,
                            "video-react-playing": !n.paused
                        }),
                        type: "button",
                        tabIndex: "0",
                        onClick: this.handleClick
                    }, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }, o))
                }
            }]),
            t
        }(p.Component);
        t.default = m,
        m.propTypes = h,
        m.displayName = "PlayToggle"
    },
    849: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = (0,
        a(n(850)).default)("forward");
        o.displayName = "ForwardControl";
        var r = o;
        t.default = r
    },
    850: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = {
            actions: d.default.object,
            className: d.default.string,
            seconds: d.default.oneOf([5, 10, 30])
        }
          , h = {
            seconds: 10
        };
        t.default = function(e) {
            var t = function(t) {
                function n(e, t) {
                    var a;
                    return (0,
                    r.default)(this, n),
                    (a = (0,
                    s.default)(this, (0,
                    l.default)(n).call(this, e, t))).handleClick = a.handleClick.bind((0,
                    c.default)(a)),
                    a
                }
                return (0,
                u.default)(n, t),
                (0,
                i.default)(n, [{
                    key: "handleClick",
                    value: function() {
                        var t = this.props
                          , n = t.actions
                          , a = t.seconds;
                        "forward" === e ? n.forward(a) : n.replay(a)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this
                          , n = this.props
                          , a = n.seconds
                          , o = n.className
                          , r = ["video-react-control", "video-react-button", "video-react-icon"];
                        return r.push("video-react-icon-".concat(e, "-").concat(a), "video-react-".concat(e, "-control")),
                        o && r.push(o),
                        p.default.createElement("button", {
                            ref: function(e) {
                                t.button = e
                            },
                            className: r.join(" "),
                            type: "button",
                            onClick: this.handleClick
                        }, p.default.createElement("span", {
                            className: "video-react-control-text"
                        }, "".concat(e, " ").concat(a, " seconds")))
                    }
                }]),
                n
            }(p.Component);
            return t.propTypes = f,
            t.defaultProps = h,
            t
        }
    },
    851: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = (0,
        a(n(850)).default)("replay");
        o.displayName = "ReplayControl";
        var r = o;
        t.default = r
    },
    852: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(583))
          , i = o(n(584))
          , s = o(n(586))
          , l = o(n(588))
          , c = o(n(587))
          , u = o(n(589))
          , d = o(n(2))
          , p = a(n(0))
          , f = o(n(52))
          , h = {
            actions: d.default.object,
            player: d.default.object,
            className: d.default.string
        }
          , m = function(e) {
            function t(e, n) {
                var a;
                return (0,
                r.default)(this, t),
                (a = (0,
                s.default)(this, (0,
                l.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                c.default)(a)),
                a
            }
            return (0,
            u.default)(t, e),
            (0,
            i.default)(t, [{
                key: "handleClick",
                value: function() {
                    var e = this.props
                      , t = e.player;
                    e.actions.toggleFullscreen(t)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this
                      , t = this.props
                      , n = t.player
                      , a = t.className;
                    return p.default.createElement("button", {
                        className: (0,
                        f.default)(a, {
                            "video-react-icon-fullscreen-exit": n.isFullscreen,
                            "video-react-icon-fullscreen": !n.isFullscreen
                        }, "video-react-fullscreen-control video-react-control video-react-button video-react-icon"),
                        ref: function(t) {
                            e.button = t
                        },
                        type: "button",
                        tabIndex: "0",
                        onClick: this.handleClick
                    }, p.default.createElement("span", {
                        className: "video-react-control-text"
                    }, "Non-Fullscreen"))
                }
            }]),
            t
        }(p.Component);
        t.default = m,
        m.propTypes = h,
        m.displayName = "FullscreenToggle"
    },
    853: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = n(630)
          , l = {
            player: o.default.object,
            className: o.default.string
        };
        function c(e) {
            var t = e.player
              , n = t.currentTime
              , a = t.duration
              , o = e.className
              , l = a - n
              , c = (0,
            s.formatTime)(l);
            return r.default.createElement("div", {
                className: (0,
                i.default)("video-react-remaining-time video-react-time-control video-react-control", o)
            }, r.default.createElement("div", {
                className: "video-react-remaining-time-display",
                "aria-live": "off"
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }, "Remaining Time "), "-".concat(c)))
        }
        c.propTypes = l,
        c.displayName = "RemainingTimeDisplay";
        var u = c;
        t.default = u
    },
    854: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = n(630)
          , l = {
            player: o.default.object,
            className: o.default.string
        };
        function c(e) {
            var t = e.player
              , n = t.currentTime
              , a = t.duration
              , o = e.className
              , l = (0,
            s.formatTime)(n, a);
            return r.default.createElement("div", {
                className: (0,
                i.default)("video-react-current-time video-react-time-control video-react-control", o)
            }, r.default.createElement("div", {
                className: "video-react-current-time-display",
                "aria-live": "off"
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }, "Current Time "), l))
        }
        c.propTypes = l,
        c.displayName = "CurrentTimeDisplay";
        var u = c;
        t.default = u
    },
    855: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = n(630)
          , l = {
            player: o.default.object,
            className: o.default.string
        };
        function c(e) {
            var t = e.player.duration
              , n = e.className
              , a = (0,
            s.formatTime)(t);
            return r.default.createElement("div", {
                className: (0,
                i.default)(n, "video-react-duration video-react-time-control video-react-control")
            }, r.default.createElement("div", {
                className: "video-react-duration-display",
                "aria-live": "off"
            }, r.default.createElement("span", {
                className: "video-react-control-text"
            }, "Duration Time "), a))
        }
        c.propTypes = l,
        c.displayName = "DurationDisplay";
        var u = c;
        t.default = u
    },
    856: function(e, t, n) {
        "use strict";
        var a = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = l;
        var o = a(n(2))
          , r = a(n(0))
          , i = a(n(52))
          , s = {
            separator: o.default.string,
            className: o.default.string
        };
        function l(e) {
            var t = e.separator
              , n = e.className
              , a = t || "/";
            return r.default.createElement("div", {
                className: (0,
                i.default)("video-react-time-control video-react-time-divider", n),
                dir: "ltr"
            }, r.default.createElement("div", null, r.default.createElement("span", null, a)))
        }
        l.propTypes = s,
        l.displayName = "TimeDivider"
    },
    857: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(695))
          , i = o(n(583))
          , s = o(n(584))
          , l = o(n(586))
          , c = o(n(588))
          , u = o(n(587))
          , d = o(n(589))
          , p = o(n(2))
          , f = a(n(0))
          , h = o(n(52))
          , m = o(n(1010))
          , v = o(n(1012))
          , y = {
            player: p.default.object,
            actions: p.default.object,
            vertical: p.default.bool,
            className: p.default.string,
            alwaysShowVolume: p.default.bool
        }
          , b = function(e) {
            function t(e, n) {
                var a;
                return (0,
                i.default)(this, t),
                (a = (0,
                l.default)(this, (0,
                c.default)(t).call(this, e, n))).state = {
                    active: !1
                },
                a.handleClick = a.handleClick.bind((0,
                u.default)(a)),
                a.handleFocus = a.handleFocus.bind((0,
                u.default)(a)),
                a.handleBlur = a.handleBlur.bind((0,
                u.default)(a)),
                a
            }
            return (0,
            d.default)(t, e),
            (0,
            s.default)(t, [{
                key: "handleClick",
                value: function() {
                    var e = this.props
                      , t = e.player;
                    e.actions.mute(!t.muted)
                }
            }, {
                key: "handleFocus",
                value: function() {
                    this.setState({
                        active: !0
                    })
                }
            }, {
                key: "handleBlur",
                value: function() {
                    this.setState({
                        active: !1
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props
                      , t = e.vertical
                      , n = e.player
                      , a = e.className
                      , o = !t
                      , i = this.volumeLevel;
                    return f.default.createElement(m.default, {
                        className: (0,
                        h.default)(a, {
                            "video-react-volume-menu-button-vertical": t,
                            "video-react-volume-menu-button-horizontal": !t,
                            "video-react-vol-muted": n.muted,
                            "video-react-vol-0": 0 === i && !n.muted,
                            "video-react-vol-1": 1 === i,
                            "video-react-vol-2": 2 === i,
                            "video-react-vol-3": 3 === i,
                            "video-react-slider-active": this.props.alwaysShowVolume || this.state.active,
                            "video-react-lock-showing": this.props.alwaysShowVolume || this.state.active
                        }, "video-react-volume-menu-button"),
                        onClick: this.handleClick,
                        inline: o
                    }, f.default.createElement(v.default, (0,
                    r.default)({
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, this.props)))
                }
            }, {
                key: "volumeLevel",
                get: function() {
                    var e = this.props.player
                      , t = e.volume
                      , n = e.muted
                      , a = 3;
                    return 0 === t || n ? a = 0 : t < .33 ? a = 1 : t < .67 && (a = 2),
                    a
                }
            }]),
            t
        }(f.Component);
        b.propTypes = y,
        b.defaultProps = {
            vertical: !1
        },
        b.displayName = "VolumeMenuButton";
        var g = b;
        t.default = g
    },
    858: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var r = o(n(695))
          , i = o(n(647))
          , s = o(n(583))
          , l = o(n(584))
          , c = o(n(586))
          , u = o(n(588))
          , d = o(n(587))
          , p = o(n(589))
          , f = o(n(2))
          , h = a(n(0))
          , m = o(n(52))
          , v = {
            tagName: f.default.string,
            onClick: f.default.func.isRequired,
            onFocus: f.default.func,
            onBlur: f.default.func,
            className: f.default.string
        }
          , y = function(e) {
            function t(e, n) {
                var a;
                return (0,
                s.default)(this, t),
                (a = (0,
                c.default)(this, (0,
                u.default)(t).call(this, e, n))).handleClick = a.handleClick.bind((0,
                d.default)(a)),
                a.handleFocus = a.handleFocus.bind((0,
                d.default)(a)),
                a.handleBlur = a.handleBlur.bind((0,
                d.default)(a)),
                a.handleKeypress = a.handleKeypress.bind((0,
                d.default)(a)),
                a
            }
            return (0,
            p.default)(t, e),
            (0,
            l.default)(t, [{
                key: "handleKeypress",
                value: function(e) {
                    32 !== e.which && 13 !== e.which || (e.preventDefault(),
                    this.handleClick(e))
                }
            }, {
                key: "handleClick",
                value: function(e) {
                    (0,
                    this.props.onClick)(e)
                }
            }, {
                key: "handleFocus",
                value: function(e) {
                    document.addEventListener("keydown", this.handleKeypress),
                    this.props.onFocus && this.props.onFocus(e)
                }
            }, {
                key: "handleBlur",
                value: function(e) {
                    document.removeEventListener("keydown", this.handleKeypress),
                    this.props.onBlur && this.props.onBlur(e)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props.tagName
                      , t = (0,
                    i.default)({}, this.props);
                    return delete t.tagName,
                    delete t.className,
                    h.default.createElement(e, (0,
                    r.default)({
                        className: (0,
                        m.default)(this.props.className),
                        role: "button",
                        tabIndex: "0",
                        onClick: this.handleClick,
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, t))
                }
            }]),
            t
        }(h.Component);
        t.default = y,
        y.propTypes = v,
        y.defaultProps = {
            tagName: "div"
        },
        y.displayName = "ClickableComponent"
    },
    859: function(e, t, n) {
        "use strict";
        var a = n(67)
          , o = n(68)
          , r = n(70)
          , i = n(69)
          , s = n(71)
          , l = n(0)
          , c = n.n(l)
          , u = (n(860),
        n(786))
          , d = n.n(u)
          , p = function(e) {
            function t() {
                var e, n;
                Object(a.a)(this, t);
                for (var o = arguments.length, s = new Array(o), l = 0; l < o; l++)
                    s[l] = arguments[l];
                return (n = Object(r.a)(this, (e = Object(i.a)(t)).call.apply(e, [this].concat(s)))).state = {},
                n
            }
            return Object(s.a)(t, e),
            Object(o.a)(t, [{
                key: "render",
                value: function() {
                    var e = this;
                    return c.a.createElement("div", {
                        className: "studyNavigation"
                    }, c.a.createElement("div", {
                        className: "navigation-guide"
                    }, c.a.createElement("div", {
                        className: "guide-text"
                    }, "\u5f53\u524d\u4f4d\u7f6e\uff1a"), this.props.position.map(function(t, n) {
                        return c.a.createElement("div", {
                            className: "guide-pageText",
                            key: n,
                            onClick: function() {
                                e.onClickGuide(t)
                            }
                        }, t.name, n != e.props.position.length - 1 && c.a.createElement("span", {
                            className: "guide-pageText-sub"
                        }, ">"))
                    })), c.a.createElement("div", {
                        className: "navigation-button",
                        onClick: function() {
                            e.clickBack()
                        }
                    }, c.a.createElement("div", {
                        className: "navigation-button-text"
                    }, "\u8fd4\u56de"), c.a.createElement("img", {
                        className: "navigation-button-icon",
                        src: d.a
                    })))
                }
            }, {
                key: "clickBack",
                value: function() {
                    "coursePage" === localStorage.getItem("answerFormPath") && 2 === this.props.position.length ? this.props.history.push({
                        pathname: "/index"
                    }) : window.history.back()
                }
            }, {
                key: "onClickGuide",
                value: function(e) {
                    e.enable && ("back" === e.src ? window.history.back() : this.props.history.push({
                        pathname: e.src
                    }))
                }
            }]),
            t
        }(l.Component);
        t.a = p
    },
    860: function(e, t, n) {},
    873: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFcElEQVRoQ+WbTYxTVRSAv9N2BmRg/trQKswClBVGYkJ0EkWjMIC6EDVEjbrTFaAuNBrFlTHR6EKDbISlhhATmI2aEdQgmgxCYiTORiIkjmg76evMAAPYaXvMLVMYpn/3vf6n3faec8/3znn33nfOuUKNfucmtbcrw2BGWe8T1iqsFrhVoU+ExWZaVa4KTCr8K3A2o4z5hFMzPkZX9clULUyTaip1HF2ZgqeBbSIMqhLwqD8NjJJhOOXj4IqgjHvUkydWFeCYo0MivKLKVsBfLePm9KQVRgQ+DgflSKW6KwKOxnWjCO8B91ZqiKX8CVXejoTkO8vx1fFwPK4rMsInCk95nbhCuUN+5eVQSM671ePaw7GEPoeyF+hxO1mVx08j7Aj3yxdu9FoDnzmji7qD7EF5yc0ENR8r7LvgsGvNGvnPZi4r4Kkp7UtmGFblARul9R4jwo+dPrb19spkubnLAkcv6nJJYlbHu8opa/D/p7WTocgymShlR0ng8Wnt70zxQwvA5hhPJwM8NNAjiWLQRYHNO7usjxERHmyw51xNr8Kxiw5bir3TRYFjCf2s6RYoS3SF/ZGgFFxcCwLPbT2fF9PvE1i8CAIBkLKrgKWVC4apQioFV5OQyXjQITxfaMvKM9ccKtLCWLF91sAu7aod6EI0A35pBjLqGnrar6xdeDjJA47G9ZAITxRTv2QxdHS4nrwigdlZuHzVvQpVDkdC8uR8yZuAo1P6sKQ5ChQN1O6l9fNuzlDj5QuX3AMbCfWzMdIr3+ekbwKLOTpa7kOgZ5m3iSuVmr7oWcOJcFAG84Bjcd2EZA8YJX8tCAzKUDgkJnJvhG7U0a8EHm124C+PJomEfKy7w0/3UrstQuHrSFAeuw583tGBAJyz+XhvtIcPjCSzPukIwObBDrq7rKDTKVhlMifZ0TFHXwM+LOdd83+zABtbVi73seFu6yzS6+GgfJQD/gm4r9WAA37YvqnTxmwz5udwUO6XREJ7ZpU42CXcinl4xwdXGPvT3ZFo7e0+9r5xi5XBuVU6F9I5oWe3WAOnOoSQTDi6VeEbq1lLhPSO968wdtYl8Gofe9+sG7BZoR+RaFx3i/BupcC28l7HVcHDJg/+jkwk9IAqz9ga0kyLlrHZRUgbDx+UmKMngHvaAViVUxJ19C+BgbYAhnHjYXMs72oHYGDGvMOzbmpArfwOA+mqAbfAPmyCOF21kG6FfTgb0u24aLXTtnSyrQ4eag4eE5O6WzPtdLSs0seD7T7udVw1ztLZj4dqfR56BbGVqxRYhFQAQi2dAHD58XAtAdDKKR6XwDdSPK2YxHOZ8bg5iWeEWyVN6yXFk5emnQvrIeDbcotIo0stXoCBzbkeL9ellkYX0zwAFy61ZMP6WjGtZNNXo8ulboFV2TS/kc11udQ8mEYWxF0CHw4HS5RLDUy5gni5d7zW/7sAtiuIZxewa912RVseag1VSr81sPJCOCR5DEUrUVFH9wm8aAtnqnop0/Rbx5/pMdm+Mb/y4LqpxdicbVsKMiJq17Z0/NcUf0+4qzxU+mwKFdNEODbtpW3JGOOmMe3CjHJkdJZkqlIMO/ki5VLvjWm5ad20Hhro3/5IE3UyNQtvE8aRfh/r1uQVxCtvPcxBj49rf+cShoENds+/7qOOJy+zbWCgeMthziKr8vn1d7qfT90sZPXAFtg/nWBnVduH5xveVA3iys5CW0+pB23t4flK5g4ne6B4A1uNvXvYr+yqyxWA+SD1vuShyi/AW3W/5LHQe+Yaj8KrAltsOoFcer95rvEsNHwuc2Iuaj1elYtaMJyiCS9qFfJY7ioeyvqMcKfAKuA21QVX8QRzT+EfhXM+5XdqfBXvf4ckt964YFrLAAAAAElFTkSuQmCC"
    },
    891: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAcCAYAAABoMT8aAAAAp0lEQVRIS7WV2wmAMBAE92zKGmxCsDKxGCuygEiCEUMe90I/AzNc5HZDUH4hhAnA/mAbafgPvAK4AMxiQQNeiOgUCXpwnJ4VjGBWwMFDgQTuCqRwU6CBK4EWLgQW+BVY4STwwFlwAMi7ndZTk484gVuQ42maImXB8x/eMFklRRotkirOWkmzDzSSbqFIJcNGkkj+rbS80q5S5STsFb7Bcj0sjUni0XYDARiiZwO3A00AAAAASUVORK5CYII="
    },
    892: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAlCAYAAABCr8kFAAABh0lEQVRIS63Wvc8NQRQH4Of4DA0RKgoVhYpeo6FQKXQKlUJP6S2JSEhEopLoRCdKrVrrPxAhhKgd2Te7Nyvv3rszc3fbzT77m5wzZyYs9GTmiY6KJbwe+9B5W4GZ2X1/Bu9xAZ+awSkM15vAtVjE12owM/fhPN7iHD7iZkR8qy7KHFYFZuZ+XMJrnEVX1dsR8X3cKUVLLsWKEmbmAVzGS5zGO9yNiB9TPbwxYS22MWELthbMzIO4imc4hTe4FxE/57bqniVvg+1JmJmHcAMPcRyvsBMRv+aSDe9XCZfAVgkz8zBu4QGO4gUeR8Tv0mSrhEtiuwlHw/EiPuNKRHypTTZOeAR3cB/drniC5xHxpwXdLUpmLoaOqzwUZgfdD5oK819jjwrUjE7tlKG5H+FYbXNPTptRk1eja8dXv6ev9QPiZOmAmJuH3dSpQmePgFHSpyWjbBbs+7T4GCgCa9BisEdnj9IqsAStBnt07XWkCdyItoyo4Zupu05zwhE6vnT+3Rrslz+g/gEIatCRdWlFQQAAAABJRU5ErkJggg=="
    },
    893: function(e, t, n) {
        "use strict";
        var a = n(84)
          , o = n.n(a)
          , r = n(123)
          , i = n(67)
          , s = n(68)
          , l = n(70)
          , c = n(69)
          , u = n(71)
          , d = n(0)
          , p = n.n(d)
          , f = (n(894),
        n(591),
        n(606))
          , h = n(122)
          , m = n(1323)
          , v = n(174)
          , y = n(175)
          , b = (n(99),
        f.a.Option)
          , g = function(e) {
            function t() {
                var e, n;
                Object(i.a)(this, t);
                for (var a = arguments.length, s = new Array(a), u = 0; u < a; u++)
                    s[u] = arguments[u];
                return (n = Object(l.a)(this, (e = Object(c.a)(t)).call.apply(e, [this].concat(s)))).state = {
                    checkVideoTimer: null,
                    startTime: void 0,
                    lastStudyTime: null,
                    sectionId: 1,
                    showVideo: !1,
                    playbackRate: 1,
                    playbackRateModal: !1,
                    playbackRateArr: [{
                        value: .5,
                        label: "0.5x"
                    }, {
                        value: 1,
                        label: "1.0x"
                    }, {
                        value: 1.2,
                        label: "1.2x"
                    }, {
                        value: 1.5,
                        label: "1.5x"
                    }, {
                        value: 2,
                        label: "2.0x"
                    }],
                    isPlaying: !1,
                    isShowVolume: !1,
                    isFullScreen: !1,
                    networkState: !0,
                    networkTimeId: null,
                    failVideo: [],
                    failTotalTime: 0,
                    videoTime: 10
                },
                n.player = null,
                n.saveStudyRecord = Object(r.a)(o.a.mark(function e() {
                    var t, a;
                    return o.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t = n.state.startTime,
                                a = (new Date).getTime(),
                                !(a - t >= 1e4 && t > 0)) {
                                    e.next = 8;
                                    break
                                }
                                return e.next = 6,
                                y.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoProgress", {
                                    videoId: n.props.sectionInfo.id,
                                    lastStudyTime: parseInt(n.player.currentTime)
                                }, !1);
                            case 6:
                                e.sent.data;
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }, e)
                })),
                n.changePlaybackRate = function(e) {
                    var t = JSON.parse(JSON.stringify(n.state.playbackRateArr));
                    n.setState({
                        playbackRate: e,
                        playbackRateArr: t
                    }),
                    n.player.playbackRate = e
                }
                ,
                n
            }
            return Object(u.a)(t, e),
            Object(s.a)(t, [{
                key: "componentWillMount",
                value: function() {
                    this.setState({
                        lastStudyTime: this.props.sectionInfo.lastStudyTime
                    })
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(e) {
                    e.sectionInfo.id != this.props.sectionInfo.id && (new Date).getTime() - this.state.startTime > 1e4 && this.state.startTime > 0 && this.saveStudyRecord()
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    var e, t = this, n = !1, a = "";
                    document.addEventListener("visibilitychange", function() {
                        if ("visible" === document.visibilityState) {
                            a = (new Date).getTime();
                            var o = Math.ceil((a - e) / 1e3);
                            n && y.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                videoId: t.props.sectionInfo.id,
                                videoType: 1,
                                studyTime: o,
                                uploadType: 2,
                                localCreateTime: (new Date).getTime(),
                                appType: 3,
                                lastStudyTime: t.props.sectionInfo.lastStudyTime
                            }, !1),
                            t.startTimer(t.state.videoTime)
                        } else
                            n = !1 === t.player.paused && !1 === t.player.ended,
                            e = (new Date).getTime(),
                            t.stopTimer()
                    }),
                    this.api_getConfig(),
                    this.playBackInit(this.props.sectionInfo),
                    window.onresize = function() {
                        var e = !!t.getfullscreenelement();
                        t.setState({
                            isFullScreen: e
                        })
                    }
                    ;
                    var i = window.localStorage.getItem("failVideo") || "[]";
                    this.setState({
                        failVideo: JSON.parse(i)
                    });
                    var s = 0;
                    JSON.parse(i).forEach(function() {
                        var e = Object(r.a)(o.a.mark(function e(n, a) {
                            return o.a.wrap(function(e) {
                                for (; ; )
                                    switch (e.prev = e.next) {
                                    case 0:
                                        if (t.props.sectionInfo.id !== n.videoId) {
                                            e.next = 8;
                                            break
                                        }
                                        return s = a,
                                        e.next = 6,
                                        y.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                            videoId: t.props.sectionInfo.id,
                                            videoType: 1,
                                            studyTime: n.time,
                                            uploadType: 2,
                                            localCreateTime: (new Date).getTime(),
                                            appType: 3,
                                            lastStudyTime: t.props.sectionInfo.lastStudyTime
                                        }, !1);
                                    case 6:
                                        "REQ001" === e.sent.code && window.localStorage.setItem("failVideo", JSON.stringify(t.state.failVideo.splice(s, 1)));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                    }
                            }, e)
                        }));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }())
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    document.removeEventListener("visibilitychange", function() {}),
                    this.stopTimer(),
                    this.saveStudyRecord(),
                    this.state.networkTimeId && (clearTimeout(this.state.networkTimeId),
                    this.state.networkTimeId = null)
                }
            }, {
                key: "api_getConfig",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e() {
                        var t;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    y.a.axiosData("post", "/yunkai/admin/userstudyrecord/videoTimeConfig", {});
                                case 2:
                                    "REQ001" === (t = e.sent).code && t.data && t.data.videoTime ? this.state.videoTime = t.data.videoTime : h.a.error(t.msg),
                                    this.startTimer(t.data.videoTime);
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "api_Connect",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e(t) {
                        var n, a = this;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = !1,
                                    e.prev = 1,
                                    e.next = 4,
                                    y.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                        videoId: this.props.sectionInfo.id,
                                        studyTime: t,
                                        uploadType: 1,
                                        localCreateTime: (new Date).getTime(),
                                        appType: 3,
                                        lastStudyTime: parseInt(this.player.currentTime)
                                    }, !1);
                                case 4:
                                    if ("REQ001" !== (n = e.sent).code || !this.state.networkTimeId) {
                                        e.next = 13;
                                        break
                                    }
                                    return clearTimeout(this.state.networkTimeId),
                                    this.state.networkTimeId = null,
                                    this.state.networkState = !0,
                                    e.next = 11,
                                    y.a.axiosData("post", "/yunkai/admin/userstudyrecord/addVideoTime", {
                                        videoId: this.props.sectionInfo.id,
                                        videoType: 1,
                                        studyTime: this.state.failTotalTime,
                                        uploadType: 2,
                                        localCreateTime: (new Date).getTime(),
                                        appType: 3,
                                        lastStudyTime: parseInt(this.player.currentTime)
                                    }, !1);
                                case 11:
                                    this.state.failTotalTime = 0,
                                    this.state.failVideo.forEach(function() {
                                        var e = Object(r.a)(o.a.mark(function e(t, n) {
                                            return o.a.wrap(function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        a.props.sectionInfo.id === t.videoId && window.localStorage.setItem("failVideo", JSON.stringify(a.state.failVideo.splice(n, 1)));
                                                    case 1:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }, e)
                                        }));
                                        return function(t, n) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 13:
                                    e.next = 17;
                                    break;
                                case 15:
                                    e.prev = 15,
                                    e.t0 = e.catch(1);
                                case 17:
                                    if (!n || n && "REQ001" !== n.code)
                                        try {
                                            window.$(".anticon-fullscreen") && window.$(".anticon-fullscreen").length > 0 ? this.networkClose() : (window.$(".anticon-fullscreen-exit").click(),
                                            this.networkClose())
                                        } catch (t) {}
                                case 18:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this, [[1, 15]])
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "networkClose",
                value: function() {
                    var e = this;
                    !1 === this.player.paused && !1 === this.player.ended && (this.state.failTotalTime += this.state.videoTime),
                    this.state.networkState && (this.player && this.player.pause(),
                    this.setState({
                        isPlaying: !1
                    }));
                    var t = -1;
                    this.state.failVideo.forEach(function(n, a) {
                        e.props.sectionInfo.id === n.videoId && (t = a,
                        n.time = e.state.failTotalTime)
                    }),
                    -1 === t && this.state.failVideo.push({
                        videoId: this.props.sectionInfo.id,
                        time: this.state.failTotalTime
                    }),
                    localStorage.setItem("failVideo", JSON.stringify(this.state.failVideo));
                    var n = m.a.error;
                    this.state.networkState && (this.state.networkState = !1,
                    n({
                        title: "\u63d0\u793a",
                        content: p.a.createElement("p", null, "\u68c0\u6d4b\u5230\u60a8\u7684\u7f51\u7edc\u8d28\u91cf\u5dee\uff0c\u4e3a\u4e86\u66f4\u597d\u7684\u64ad\u653e\u4f53\u9a8c\u6b63\u5728\u5c1d\u8bd5\u7f13\u5b58\u89c6\u9891\uff0c\u64ad\u653e\u5df2\u81ea\u52a8\u6682\u505c~", p.a.createElement("br", null), "\u8bf7\u70b9\u51fb\u4e0b\u65b9\u201c\u786e\u5b9a\u201d\u6309\u94ae\u5173\u95ed\u6b64\u5f39\u7a97"),
                        okText: "\u786e\u5b9a",
                        okButtonProps: {},
                        cancelText: "\u53d6\u6d88",
                        onOk: function() {
                            e.saveStudyRecord(),
                            e.state.networkTimeId = setTimeout(function() {
                                e.state.networkState = !0
                            }, 3e5)
                        }
                    }))
                }
            }, {
                key: "startTimer",
                value: function(e) {
                    var t = this;
                    this.stopTimer(),
                    this.state.checkVideoTimer = window.setInterval(function() {
                        t.saveStudyRecord(),
                        t.api_Connect(e)
                    }, 1e3 * e)
                }
            }, {
                key: "stopTimer",
                value: function() {
                    this.state.checkVideoTimer && (window.clearInterval(this.state.checkVideoTimer),
                    this.state.checkVideoTimer = null)
                }
            }, {
                key: "playBackInit",
                value: function(e) {
                    var t = this
                      , n = BJY.playback.Loading.create({
                        element: $("#bjy-playback-wrapper"),
                        logoUrl: window.localStorage.getItem("headerLogo") || "",
                        onComplete: function() {
                            n.destroy(),
                            t.setState({
                                showVideo: !0
                            })
                        }
                    });
                    this.getBaijiayunPlayBackToken(e)
                }
            }, {
                key: "getBaijiayunPlayBackToken",
                value: function() {
                    var e = Object(r.a)(o.a.mark(function e(t) {
                        var n;
                        return o.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    y.a.axiosData("post", "/yunkai/web/study/getBaijiayunPlayBackToken", {
                                        channelId: t.channelId,
                                        sessionId: t.sessionId
                                    });
                                case 2:
                                    null !== (n = e.sent).data && (this.setState({
                                        channelId: t.channelId,
                                        sessionId: t.sessionId,
                                        sectionId: t.id,
                                        token: n.data.token
                                    }),
                                    this.creatBjyPlayback());
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "creatBjyPlayback",
                value: function() {
                    var e = this
                      , t = JSON.parse(localStorage.getItem("pcUserInfo"));
                    BJY.playback.init({
                        privateDomainPrefix: "b53939712",
                        token: this.state.token,
                        useEncrypt: !0,
                        class: {
                            id: this.state.channelId,
                            sessionId: this.state.sessionId
                        },
                        user: {
                            number: t.id,
                            name: t.name,
                            avatar: null === t.avatarUrl ? "" : t.avatarUrl,
                            type: 0
                        }
                    }).then(function(t) {
                        e.creatBjyPlayer(t),
                        e.creatBjyWhiteboard(),
                        e.creatBjyMessageList(),
                        e.creaBjyVolumeSlidert()
                    })
                }
            }, {
                key: "creatBjySlider",
                value: function(e) {
                    var t = this
                      , n = e.videos[e.defaultDefinition][0].duration
                      , a = this.props.sectionInfo.lastStudyTime
                      , o = this.player;
                    this.playerSlider = BJY.PlayerSlider.create({
                        element: $(".bjy-playback-playslider"),
                        currentTime: a,
                        duration: n,
                        canUseHotKey: !0,
                        onBeforeDrag: function() {
                            o.pause(),
                            t.setState({
                                isPlaying: !1
                            })
                        },
                        slideAnimation: function(e) {},
                        onAfterDrag: function(e) {
                            o.currentTime = e,
                            o.play(),
                            t.setState({
                                isPlaying: !0
                            })
                        },
                        onBeforeSeek: function(e) {
                            o.pause(),
                            t.setState({
                                isPlaying: !1
                            })
                        },
                        onAfterSeek: function(e) {
                            o.currentTime = e,
                            o.play(),
                            t.setState({
                                isPlaying: !0
                            })
                        },
                        onBeforeBackward: function() {
                            o.pause(),
                            t.setState({
                                isPlaying: !1
                            })
                        },
                        onAfterBackward: function(e) {
                            o.currentTime = e,
                            o.play(),
                            t.setState({
                                isPlaying: !0
                            })
                        },
                        onBeforeForward: function() {
                            o.pause(),
                            t.setState({
                                isPlaying: !1
                            })
                        },
                        onAfterForward: function(e) {
                            o.currentTime = e,
                            o.play(),
                            t.setState({
                                isPlaying: !0
                            })
                        },
                        onSpacePress: function() {
                            o.paused ? o.play() : o.pause(),
                            t.setState({
                                isPlaying: !o.paused
                            })
                        }
                    }),
                    o.addEventListener("timeupdate", function() {
                        t.playerSlider && t.playerSlider.set("currentTime", o.currentTime)
                    }),
                    this.videoPlay(this)
                }
            }, {
                key: "creaBjyVolumeSlidert",
                value: function() {
                    var e = this;
                    BJY.VolumeSlider.create({
                        element: $(".bjy-playback-volume"),
                        min: 0,
                        max: 100,
                        value: 30,
                        onChange: function(t) {
                            e.player.volume = t / 100
                        }
                    }),
                    $(".bjy-playback-playslider-wrapper").hover(function() {}, function() {
                        e.setState({
                            isShowVolume: !1
                        })
                    })
                }
            }, {
                key: "videoPlay",
                value: function(e) {
                    var t = e.player;
                    this.setState({
                        isPlaying: !this.state.isPlaying
                    }),
                    t.paused ? t.play() : t.pause()
                }
            }, {
                key: "showVolume",
                value: function() {
                    this.setState({
                        isShowVolume: !this.state.isShowVolume
                    })
                }
            }, {
                key: "creatBjyPlayer",
                value: function(e) {
                    var t = this
                      , n = this.player = document.getElementById("bjy-player-teacher");
                    BJY.eventEmitter,
                    BJY.store;
                    BJY.playback.start().then(function() {
                        e.videos,
                        e.videoWatermark;
                        if (e.videos) {
                            var a = e.videos[e.defaultDefinition][0].url;
                            (a = a.replace("https:", "").replace("http:", "")).indexOf("ev1") > -1 && flvjs ? (flvPlayer = flvjs.createPlayer({
                                type: "ev1",
                                url: a,
                                cors: !0
                            }, {
                                stashInitialSize: 1024
                            }),
                            flvPlayer.attachMediaElement(n),
                            flvPlayer.load()) : n.src = a;
                            var o = !1;
                            n.oncanplay = function() {
                                o || (o = !0)
                            }
                            ,
                            n.addEventListener("play", function() {
                                BJY.playback.play(),
                                t.setState({
                                    startTime: (new Date).getTime()
                                }),
                                t.state.networkState && t.api_getConfig()
                            }),
                            n.addEventListener("pause", function() {
                                BJY.playback.pause(),
                                t.state.networkState && t.stopTimer()
                            }),
                            n.addEventListener("seeked", function() {
                                BJY.playback.seek(n.currentTime),
                                BJY.playback.play()
                            }),
                            n.addEventListener("ended", function() {
                                t.setState({
                                    isPlaying: !1
                                }),
                                t.api_Connect(t.state.videoTime)
                            }),
                            n.addEventListener("timeupdate", function() {
                                BJY.playback.timeupdate(n.currentTime)
                            }),
                            n.currentTime = t.state.lastStudyTime
                        }
                        t.creatBjySlider(e)
                    })
                }
            }, {
                key: "creatBjyWhiteboard",
                value: function() {
                    var e = BJY.eventEmitter;
                    BJY.store;
                    BJY.Whiteboard.create({
                        element: $("#bjy-playback-whiteboard-wrapper"),
                        fit: 1
                    }),
                    e.on(e.WHITEBOARD_LAYOUT_CHANGE, function(e, t) {}).on(e.DOC_IMAGE_LOAD_START, function() {}).on(e.DOC_IMAGE_LOAD_END, function() {})
                }
            }, {
                key: "getreqfullscreen",
                value: function() {
                    var e = document.documentElement;
                    return e.requestFullscreen || e.webkitRequestFullscreen || e.mozRequestFullScreen || e.msRequestFullscreen
                }
            }, {
                key: "getexitfullscreen",
                value: function() {
                    return document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen
                }
            }, {
                key: "getfullscreenelement",
                value: function() {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                }
            }, {
                key: "fullScreen",
                value: function(e) {
                    var t = document.getElementsByClassName("play-back-container")[0];
                    e.getfullscreenelement() ? e.getexitfullscreen().call(document) : e.getreqfullscreen().call(t)
                }
            }, {
                key: "creatBjyMessageList",
                value: function() {
                    var e = {};
                    e[BJY.config.ROLE_TYPE_TEACHER] = {
                        en: "teacher",
                        cn: "\u8001\u5e08"
                    },
                    e[BJY.config.ROLE_TYPE_ASSISTANT] = {
                        en: "assistant",
                        cn: "\u52a9\u6559"
                    },
                    e[BJY.config.ROLE_TYPE_STUDENT] = {
                        en: "student",
                        cn: "\u5b66\u751f"
                    },
                    e[BJY.config.ROLE_TYPE_GUEST] = {
                        en: "guest",
                        cn: "\u6e38\u5ba2"
                    },
                    BJY.MessageList.create({
                        element: $("#bjy-playback-message-wrapper"),
                        renderEmoji: BJY.data.emotion.render,
                        renderUser: function(t, n, a) {
                            return {
                                id: t.id,
                                name: t.name,
                                number: t.number,
                                avatar: BJY.compressImage({
                                    url: t.avatar,
                                    width: n,
                                    height: a
                                }),
                                avatar2x: BJY.compressImage({
                                    url: t.avatar,
                                    width: 2 * n,
                                    height: 2 * a
                                }),
                                role: e[t.type].en,
                                localRole: e[t.type].cn
                            }
                        },
                        renderImage: function(e) {
                            return e = BJY.removeProtocol(e),
                            BJY.isAlicloudImage(e) ? '<img ondragstart="return false" class="img-content" data-src="' + e + '@500h_1e_1l" src="' + e + '@100w_1e_1l" srcset="' + e + '@200w_1e_1l 2x">' : '<img ondragstart="return false" class="img-content" data-src="' + e + '" src="' + e + '">'
                        },
                        renderLink: function(e) {
                            var t = e;
                            return '<a class="bjy-link" target="_target" href="' + BJY.removeProtocol(t) + '">' + e + "</a>"
                        }
                    })
                }
            }, {
                key: "render",
                value: function() {
                    var e = this;
                    return p.a.createElement("div", {
                        style: {
                            width: "100%",
                            position: this.state.isFullScreen ? "fixed" : "relative"
                        },
                        id: "live-player",
                        className: "play-back-container"
                    }, p.a.createElement("div", {
                        id: "bjy-withboard-container",
                        className: this.state.isFullScreen ? "whiteboard-fullscreen" : ""
                    }, p.a.createElement("div", {
                        id: "bjy-playback-whiteboard-wrapper"
                    }), p.a.createElement("div", {
                        className: "bjy-playback-playslider-wrapper",
                        style: {
                            visibility: this.state.showVideo ? "visible" : "hidden"
                        }
                    }, p.a.createElement(v.a, {
                        type: this.state.isPlaying ? "pause-circle" : "play-circle",
                        style: {
                            fontSize: "26px",
                            color: "#fff"
                        },
                        onClick: function() {
                            e.videoPlay(e)
                        }
                    }), p.a.createElement("div", {
                        className: "bjy-playback-playslider"
                    }), p.a.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, p.a.createElement(v.a, {
                        type: "sound",
                        style: {
                            fontSize: "26px",
                            color: "#fff"
                        },
                        onClick: function() {
                            e.showVolume()
                        }
                    }), p.a.createElement("div", {
                        className: "bjy-playback-volume-bar",
                        style: {
                            display: this.state.isShowVolume ? "block" : "none"
                        }
                    }, p.a.createElement("div", {
                        className: "bjy-playback-volume"
                    }))), p.a.createElement("div", {
                        id: "playback-rate-select",
                        className: "playback-rate-select",
                        style: {
                            display: "none"
                        }
                    }, p.a.createElement(f.a, {
                        value: this.state.playbackRate,
                        onChange: this.changePlaybackRate,
                        getPopupContainer: function() {
                            return document.getElementById("playback-rate-select")
                        },
                        dropdownClassName: "playback-rate-select-menu"
                    }, this.state.playbackRateArr.map(function(e, t) {
                        return p.a.createElement(b, {
                            key: t,
                            value: e.value,
                            className: "playback-rate-select-option"
                        }, e.label)
                    }))), p.a.createElement(v.a, {
                        type: this.state.isFullScreen ? "fullscreen-exit" : "fullscreen",
                        style: {
                            fontSize: "26px",
                            color: "#fff"
                        },
                        onClick: function() {
                            e.fullScreen(e)
                        }
                    }))), p.a.createElement("div", {
                        className: "play-back-right"
                    }, p.a.createElement("div", {
                        style: {
                            position: "relative"
                        }
                    }, p.a.createElement("video", {
                        id: "bjy-player-teacher"
                    }), p.a.createElement("div", {
                        id: "bjy-playback-wrapper"
                    })), p.a.createElement("div", {
                        id: "bjy-playback-message-wrapper-container",
                        style: {
                            display: this.state.showVideo ? "block" : "none"
                        }
                    }, p.a.createElement("div", {
                        id: "bjy-playback-message-wrapper"
                    }))))
                }
            }]),
            t
        }(p.a.Component);
        t.a = g
    },
    894: function(e, t, n) {},
    998: function(e, t, n) {},
    999: function(e, t, n) {
        "use strict";
        var a = n(585)
          , o = n(570);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Player", {
            enumerable: !0,
            get: function() {
                return r.default
            }
        }),
        Object.defineProperty(t, "Video", {
            enumerable: !0,
            get: function() {
                return i.default
            }
        }),
        Object.defineProperty(t, "BigPlayButton", {
            enumerable: !0,
            get: function() {
                return s.default
            }
        }),
        Object.defineProperty(t, "LoadingSpinner", {
            enumerable: !0,
            get: function() {
                return l.default
            }
        }),
        Object.defineProperty(t, "PosterImage", {
            enumerable: !0,
            get: function() {
                return c.default
            }
        }),
        Object.defineProperty(t, "Slider", {
            enumerable: !0,
            get: function() {
                return u.default
            }
        }),
        Object.defineProperty(t, "Bezel", {
            enumerable: !0,
            get: function() {
                return d.default
            }
        }),
        Object.defineProperty(t, "Shortcut", {
            enumerable: !0,
            get: function() {
                return p.default
            }
        }),
        Object.defineProperty(t, "ControlBar", {
            enumerable: !0,
            get: function() {
                return f.default
            }
        }),
        Object.defineProperty(t, "PlayToggle", {
            enumerable: !0,
            get: function() {
                return h.default
            }
        }),
        Object.defineProperty(t, "ForwardControl", {
            enumerable: !0,
            get: function() {
                return m.default
            }
        }),
        Object.defineProperty(t, "ReplayControl", {
            enumerable: !0,
            get: function() {
                return v.default
            }
        }),
        Object.defineProperty(t, "FullscreenToggle", {
            enumerable: !0,
            get: function() {
                return y.default
            }
        }),
        Object.defineProperty(t, "ProgressControl", {
            enumerable: !0,
            get: function() {
                return b.default
            }
        }),
        Object.defineProperty(t, "SeekBar", {
            enumerable: !0,
            get: function() {
                return g.default
            }
        }),
        Object.defineProperty(t, "PlayProgressBar", {
            enumerable: !0,
            get: function() {
                return k.default
            }
        }),
        Object.defineProperty(t, "LoadProgressBar", {
            enumerable: !0,
            get: function() {
                return S.default
            }
        }),
        Object.defineProperty(t, "MouseTimeDisplay", {
            enumerable: !0,
            get: function() {
                return E.default
            }
        }),
        Object.defineProperty(t, "VolumeMenuButton", {
            enumerable: !0,
            get: function() {
                return A.default
            }
        }),
        Object.defineProperty(t, "PlaybackRateMenuButton", {
            enumerable: !0,
            get: function() {
                return w.default
            }
        }),
        Object.defineProperty(t, "PlaybackRate", {
            enumerable: !0,
            get: function() {
                return C.default
            }
        }),
        Object.defineProperty(t, "ClosedCaptionButton", {
            enumerable: !0,
            get: function() {
                return O.default
            }
        }),
        Object.defineProperty(t, "RemainingTimeDisplay", {
            enumerable: !0,
            get: function() {
                return T.default
            }
        }),
        Object.defineProperty(t, "CurrentTimeDisplay", {
            enumerable: !0,
            get: function() {
                return P.default
            }
        }),
        Object.defineProperty(t, "DurationDisplay", {
            enumerable: !0,
            get: function() {
                return I.default
            }
        }),
        Object.defineProperty(t, "TimeDivider", {
            enumerable: !0,
            get: function() {
                return N.default
            }
        }),
        Object.defineProperty(t, "MenuButton", {
            enumerable: !0,
            get: function() {
                return x.default
            }
        }),
        Object.defineProperty(t, "playerReducer", {
            enumerable: !0,
            get: function() {
                return j.playerReducer
            }
        }),
        Object.defineProperty(t, "operationReducer", {
            enumerable: !0,
            get: function() {
                return j.operationReducer
            }
        }),
        t.videoActions = t.playerActions = void 0;
        var r = o(n(1e3))
          , i = o(n(837))
          , s = o(n(834))
          , l = o(n(835))
          , c = o(n(836))
          , u = o(n(789))
          , d = o(n(840))
          , p = o(n(841))
          , f = o(n(842))
          , h = o(n(848))
          , m = o(n(849))
          , v = o(n(851))
          , y = o(n(852))
          , b = o(n(843))
          , g = o(n(844))
          , k = o(n(845))
          , S = o(n(846))
          , E = o(n(847))
          , A = o(n(857))
          , w = o(n(790))
          , C = o(n(1017))
          , O = o(n(1018))
          , T = o(n(853))
          , P = o(n(854))
          , I = o(n(855))
          , N = o(n(856))
          , x = o(n(791))
          , M = a(n(745));
        t.playerActions = M;
        var D = a(n(699));
        t.videoActions = D;
        var j = n(832)
    }
}]);
