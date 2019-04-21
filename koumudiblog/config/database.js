if(process.env.NODE_ENV === 'production'){
  module.exports={
    mongoURI:'mongodb://Koumudi:koumikoumudi4@ds019990.mlab.com:19990/vidjot'
  }
}
  else{
mongoURI:'mongodb://localhost/vidjot-dev'
  }
