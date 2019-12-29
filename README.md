# MSBuild Plugin

<img src="https://cdn.jsdelivr.net/gh/clarive/cla-msbuild-plugin/public/icon/msbuild.svg?sanitize=true" alt="MSBuild Plugin" title="MSBuild Plugin" width="120" height="120">

The MSBuild plugin will allow you to build applications via the command-line (CLI).

## Requirements

There are no requirements outlined in Clarive in order to work with this plugin.

## Installation

To install the plugin, place the `cla-msbuild-plugin` folder inside the `$CLARIVE_BASE/plugins`
directory in a Clarive instance.

### MSBuild

The available parameters for the service are:

- **Server (variable name: server)** - Server where MSBuild is installed.
- **User (user)** - User which will be used to connect to the server.
- **MSBuild Path (msbuild)** - Path to MSBuild. 
- **Project Path (project)** - Path to the project.
- **Switches (switches)** - Commands to make the builds.

**Only Clarive EE**

- **Errors and output** - These two fields concern management of control errors. Their options are:
   - **Fail and output error** - Search for configured error pattern in script output. If found, an error message is
     displayed in the monitor showing the match.
   - **Warn and output warn** - Search for configured warning pattern in script output. If found, an error message is
     displayed in the monitor showing the match.
   - **Custom** - Where combo errors is set to custom, a new form is displayed for defining using the following fields:
      - **OK** - Range of return code values for the script to have succeeded. No message will be displayed in the
        monitor.
      - **Warn** - Range of return code values to warn the user. A warning message will be displayed in the monitor.
      - **Error** - Range of return code values for the script to have failed. An error message will be displayed in the
        monitor.
   - **Silent** - Silence all errors found.

## How to use

### In Clarive EE

Once the plugin is placed in its folder, you can find this service in the palette in the section of generic service and can be used like any other palette op.

Op Name: **MSBuild**

Example:

```yaml
    Server CI: GenericServer
    MSBuild Path: c:\Program Files (x86)\MSbuildPath\MSBuild.exe
    Project Path: c:\BuildApp\BuildApp.csproj
    Switches: /t:mytarget
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

```yaml
do:
   - msbuild_task:
       server: msbuild_server   # Required. Use the mid set to the resource you created
       user: 'clarive'
       msbuild: 'c:\Program Files (x86)\MSbuildPath\MSBuild.exe'    # Required
       project: "c:\BuildApp\BuildApp.csproj"   # Required
       switches: ['/t:mytarget']
```

##### Outputs

###### Success

The service will return the console output for the command.

###### Possible configuration failures

**Task failed**

If the task fails, you will be notice with the console output.

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "msbuild_task": "msbuild"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `Command` not available for op "msbuild_task"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.
