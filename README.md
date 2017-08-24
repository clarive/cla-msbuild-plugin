# MSBuild Plugin

The MSBuild plugin will allow you to build applications via the command-line (CLI).

## Requirements

There are no requirements outlined in Clarive in order to work with this plugin.

## Installation

To install the plugin, place the `cla-msbuild-plugin` folder inside the `CLARIVE_BASE/plugins`
directory in a Clarive instance.

## How to Use

Once the plugin is correctly installed, you will have a new palette service called 'MSBuild'.


### MSBuild

This palette service will enable you to use commands that allow you to interact with MSBuild.
The main fields are:

- **Server** - Server where MSBuild is installed.
- **MSBuild Path** - Path to MSBuild. 
- **Project Path** - Path to the project.

Configuration example:

    Server CI: GenericServer
    MSBuild Path: "c:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\MSBuild.exe"
    Project Path: "c:\BuildApp\BuildApp.csproj"
    Switches: /t:mytarget

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


