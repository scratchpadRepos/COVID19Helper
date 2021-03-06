var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Button, Typography, Toolbar, AppBar, Select, MenuItem, InputLabel, Icon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { data } from './localizedStrings.js';
import LocalizedStrings from 'react-localization';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

var strings = new LocalizedStrings(data);

var styles = function styles(theme) {
  return {
    menuButton: {
      marginRight: theme.spacing(2)
    },
    languageSelect: {
      marginRight: theme.spacing(2),
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.08)'
      }
    },
    languageSelectInput: {
      color: '#ffffff'
    },
    title: {
      flexGrow: 1
    }
  };
};

function WhiteDropDownIcon() {
  return React.createElement(
    Icon,
    { style: { color: "#ffffff" } },
    React.createElement(ExpandMoreIcon, null)
  );
}

var TopBar = function (_React$Component) {
  _inherits(TopBar, _React$Component);

  function TopBar(props) {
    _classCallCheck(this, TopBar);

    var _this = _possibleConstructorReturn(this, (TopBar.__proto__ || Object.getPrototypeOf(TopBar)).call(this, props));

    _this.ParentSetLanguageFunction = props.SetLaguageFunction;
    var lang = props.language;


    _this.state = {
      language: lang
    };

    // const langKey = 'config_user_langauge';
    // let lang = window.localStorage.getItem(langKey);
    // if( lang == null )
    // {
    //   switch(navigator.language)
    //   {
    //     // case 'en-US':
    //     // case 'en':
    //     //   lang = 'lang_en_us';
    //     //   break;
    //     case 'hi-IN':
    //     case 'hi':
    //       lang = 'lang_hindi';
    //       break;
    //     case 'mr-IN':
    //     case 'mr':
    //       lang = 'lang_marathi';
    //       break;
    //     default:
    //       lang = 'lang_marathi';
    //       break;
    //   }
    // }
    // window.localStorage.setItem(langKey, lang);
    // this.state.language = lang;
    //this.ParentSetLanguageFunction(lang);
    strings.setLanguage(lang);
    console.log("top bar constructor ", _this.state.language);
    return _this;
  }

  _createClass(TopBar, [{
    key: 'HandleChange',
    value: function HandleChange(event) {
      var langKey = 'config_user_langauge';
      var newLang = event.target.value;
      console.log("handle change1", newLang, event);
      console.log("handle change2", this.state);
      if (newLang) {
        window.localStorage.setItem(langKey, newLang);
        strings.setLanguage(newLang);
        this.setState({ language: newLang });
        this.ParentSetLanguageFunction(newLang);
        console.log("handle change3", this.state);
      }
      console.log("handle change4", this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = this.props.classes;

      console.log("top render constructor ", this.state.language);

      return React.createElement(
        AppBar,
        { position: 'static' },
        React.createElement(
          Toolbar,
          null,
          React.createElement(
            IconButton,
            { edge: 'start', className: classes.menuButton, color: 'inherit', 'aria-label': 'menu' },
            React.createElement(MenuIcon, null)
          ),
          React.createElement(
            Typography,
            { variant: 'subtitle1', className: classes.title },
            strings.IDS_HELP_NEARBY
          ),
          React.createElement(
            FormControl,
            { className: classes.languageSelect },
            React.createElement(
              Select,
              { value: this.state.language,
                onChange: this.HandleChange.bind(this),
                IconComponent: WhiteDropDownIcon, disableUnderline: true, inputProps: { className: classes.languageSelectInput } },
              React.createElement(
                MenuItem,
                { value: 'lang_en_us' },
                'English'
              ),
              React.createElement(
                MenuItem,
                { value: 'lang_marathi' },
                '\u092E\u0930\u093E\u0920\u0940'
              ),
              React.createElement(
                MenuItem,
                { value: 'lang_hindi' },
                '\u0939\u093F\u0928\u094D\u0926\u0940'
              )
            )
          )
        )
      );
    }
  }]);

  return TopBar;
}(React.Component);

;

export default withStyles(styles)(TopBar);