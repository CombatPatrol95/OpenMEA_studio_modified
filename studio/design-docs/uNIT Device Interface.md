# OpenMEA Device Interface [preliminary sketch]

## What's OpenMEA Device Interface?

OpenMEA Device Interface defines an interface for communication between OpenMEA Studio and a "device", which can be OpenMEA electrophysiology hardware, an NWB file reader, a remote server, or any other data source.

The interface allows OpenMEA studio to determine the device capabilities, read the data from the device, and issue commands.

The interface expect the devices to provide raw data before any software filtering or downsampling.

## The interface

OpenMEA `Device` is a Python base class that defines the following methods:

* `info()`: returns the the electrode layout, the device capabilities, and the commands that it can run.
* `run_command(commands: Dict)`: runs one of several device commands. The list of available commands should be returned by `info()`.
* `get_data(from: float, to: float)`: returns data for a specific time period. Not all devices may support this.
* `on_data(handler)`: will run `handler` when new live data is available.

