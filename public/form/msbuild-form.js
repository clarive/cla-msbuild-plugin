(function(params) {

    var data = params.data || {};

    var serverCombo = Cla.ui.ciCombo({
        name: 'server',
        value: data.server || '',
        class: 'BaselinerX::CI::generic_server',
        fieldLabel: _('Server'),
        allowBlank: false,
        with_vars: 1
    });

    var pathMsbuild = Cla.ui.textField({
        name: 'msbuild',
        fieldLabel: _('MSBuild Path'),
        value: data.msbuild || '',
        allowBlank: false,
    });

    var pathProject = Cla.ui.textField({
        name: 'project',
        fieldLabel: _('Project Path'),
        value: data.project || '',
        allowBlank: false,
    });

    var switches = Cla.ui.arrayGrid({
        name: 'switches',
        fieldLabel: _('Switches'),
        value: data.switches,
        description: _('Switches'),
        default_value: '.'
    });

    var errors = Cla.ui.errorManagementBox({
        errorTypeName: 'type',
        errorTypeValue: params.data.type || 'warn',
        rcOkName: 'ok',
        rcOkValue: params.data.ok,
        rcWarnName: 'warn',
        rcWarnValue: params.data.warn,
        rcErrorName: 'error',
        rcErrorValue: params.data.error,
        errorTabsValue: params.data
    });

    var panel = Cla.ui.panel({
        layout: 'form',
        items: [
            serverCombo,
            pathMsbuild,
            pathProject,
            switches,
            errors,
        ]
    });

    return panel;
})