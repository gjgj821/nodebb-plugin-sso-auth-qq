define('admin/plugins/sso-auth-qq', ['settings'], function(Settings) {
	'use strict';
	/* globals $, app, socket, require */

	var ACP = {};

	ACP.init = function() {
		Settings.load('sso-auth-qq', $('.sso-auth-qq-settings'));

		$('#save').on('click', function() {
			Settings.save('sso-auth-qq', $('.sso-auth-qq-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'sso-auth-qq-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});
