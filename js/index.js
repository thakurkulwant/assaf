/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
        //alert('here we gooo')
        var db = null;
        db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
  
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

      //  alert('Received Event: ' + id);
      
  /*var db = null;
  db = window.sqlitePlugin.openDatabase({name: "my.db", location: 'default'});
  db.transaction(function(tx) {
          tx.executeSql('DROP TABLE IF EXISTS test_table');
          tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, data text, data_num integer)');
      }, function(error) {
        alert('Table already created ' + error.message);
      }, function() {
        alert('Table created OK');
      }); */
//alert('here') 
       /* 
        var fbLoginSuccess = function (userData) {
          alert("UserInfo: ", userData);
}

facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
  function loginError (error) {
    alert(error)
  }
); */
    }
};

app.initialize();