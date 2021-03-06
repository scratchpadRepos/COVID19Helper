import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {IconButton, Button, Typography, Toolbar, AppBar, Select, MenuItem, InputLabel, Icon} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {data} from './localizedStrings.js';
import LocalizedStrings from 'react-localization';
import FormControl from '@material-ui/core/FormControl';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const strings = new LocalizedStrings(data);

const styles = (theme) => ({
menuButton: {
  marginRight: theme.spacing(2),
},
languageSelect: {
  marginRight: theme.spacing(2),
  '&:hover' : {
    backgroundColor : 'rgba(0,0,0,0.08)'
  }
},
languageSelectInput : {
  color:'#ffffff'
},
title: {
  flexGrow: 1,
},
});

function WhiteDropDownIcon()
{
  return (
    <Icon style={{color:"#ffffff"}}>
      <ExpandMoreIcon  />
    </Icon>
  );
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.ParentSetLanguageFunction = props.SetLaguageFunction;
    let {language : lang} = props;

    this.state = {
      language:lang,
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
    console.log("top bar constructor ", this.state.language);
  }

  HandleChange(event)
  {
      const langKey = 'config_user_langauge';
      let newLang = event.target.value;
      console.log("handle change1", newLang, event);
      console.log("handle change2", this.state);
      if(newLang)
      {
        window.localStorage.setItem(langKey, newLang);
        strings.setLanguage(newLang);
        this.setState({language:newLang});
        this.ParentSetLanguageFunction(newLang);
        console.log("handle change3", this.state);
      }
      console.log("handle change4", this.state);
  }

  render() {
    const { classes } = this.props;
    console.log("top render constructor ", this.state.language);
    
    return (
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="subtitle1" className={classes.title}>
              {strings.IDS_HELP_NEARBY}
            </Typography>
            <FormControl className={classes.languageSelect} >
              <Select value={this.state.language} 
              onChange={this.HandleChange.bind(this)}
              IconComponent={WhiteDropDownIcon } disableUnderline inputProps={{className:classes.languageSelectInput}}>
                <MenuItem value="lang_en_us">English</MenuItem>
                <MenuItem value="lang_marathi">मराठी</MenuItem>
                <MenuItem value="lang_hindi">हिन्दी</MenuItem>
              </Select>
            </FormControl>
          </Toolbar>
        </AppBar>
    );
  }
};

export default withStyles(styles)(TopBar);
