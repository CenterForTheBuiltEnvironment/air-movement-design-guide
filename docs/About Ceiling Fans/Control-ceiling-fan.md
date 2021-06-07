---
sidebar_position: 3
---

# Control
Controls for ceiling fans run the gamut from basic manual on-off and speed controls, to fully automated
onboard controls that are also integrated with the building automation system. In any scenario the design
and specification of ceiling fans must address a variety of controls considerations. Will the fans be fully
manual or automated? Will occupants have control over the fans, and if so how and where? If the fans
are automatically controlled, what will the setpoints or triggers be? How much variation in fan speeds is
necessary for the application? How will ceiling fan controls interface with the HVAC system? These
questions must all be considered when planning controls for ceiling fans.

Control needs and priorities will vary from application to application. The following sections provide
guidance through the most common decisions related to controls when designing and specifying ceiling
fans.

## User Interface
One of the most important control considerations for implementing ceiling fans is how the occupants will
control the fans. Typical user interface options are listed below. Note that it is common for ceiling fan
installations to combine several of the control types listed below in a single application.

### Pull Chain
Adjust a fan’s speed or light level by pull chain located on the fan. Typically, each fan will have
two chains, one for the light, and one to turn the fan on or off and adjust the fan speed, typically through
just 3 speed levels. Typically only used in residential applications.

### Wired Wall Control
Slide controls or knobs on the wall connecting to wiring in order to control fan speed
and light levels. Wall controls may be preferable for fans with greater fan speed variability or dimmable
lighting.

### Wireless IR Remote Control or Detachable Wall Control (modify)
Wall control or IR remotes tuned to create a frequency
combination enabling wireless control of fan speed and light levels. Like wired wall controls, wireless
controls can support greater fan speed variability and dimmable lighting. Wireless controls eliminate the
need for hardwired connections, which can be costly in retrofit scenarios, but they also typically use
batteries that will need to replaced regularly, and if detachable, they can be lost or misplaced.

### Thermostatic (new)

### Wi-Fi or Bluetooth Connectivity via Phone Apps or Internet
Some fans have smartphone apps or web
interfaces that use Bluetooth or Wi-Fi networks to control fan speed, light levels and other settings. This
may be especially advantageous for controlling multiple fans in a space or throughout a buildings, but may
be less ideal for spaces where multiple people will need access to fan controls. Additionally, note that many
fan models can be retrofit with a controller that adds Wifi or Bluetooth control capabilities.

### Building Automation System Interface
Some fans may also be controlled through building automation
system interface. This approach may be ideal for applications where access to fan control needs to be
limited to building management and maintenance staff, such as assembly and hospitality spaces.

A sample of ceiling fan controls are shown above, demonstrating that many are not particularly clear to
the user. For example, the controls are not labeled as controlling the ceiling fan and as such are
indistinguishable from a dimmable light switch in many cases.

**For any space it is important to ensure that wall mounted fan controls are:**
<ul><li> Clearly visible to the occupant(s) </li></ul>
<ul><li> Located near the fan they control </li></ul>
<ul><li> Located near the thermostat in the room </li></ul>
<ul><li> Intuitive (e.g., levels increase vertically from off to maximum speed) </li></ul>
<ul><li> Clearly labeled as a ceiling fan control (to differentiate from the lighting controls) </li></ul>

## Types of Control Automation 
In addition to the user control interfaces listed above, there are a range of options and strategies for
ceiling fan control automation. Listed below are some automation strategies that can be implemented for
ceiling fans. As with control interfaces, many of these automation strategies can be used in combination.
However, the automation options available for any given application will sometimes depend on the
capabilities of the chosen ceiling fan model.

### Manual
No automation, fan control is fully manual based on occupant inputs.

### Schedule
A schedule may be set for when the fans are operating, typically at a fixed speed. For example, if
a room is generally only used during weekday business hours, a schedule could be set to automatically turn
on each weekday morning and turn off at night.

### Automation Based on Occupancy
occupancy controls ensure that a fan only operates when the space is
occupied. Ceiling fans only provide a cooling sensation if an occupant is there to feel it.
<ul><li> Wall switch “vacancy” or “occupancy” sensing </li></ul>
<ul><li> Integration with building automation system (BAS) occupancy sensors (e.g. via power relay, 0-10V
input or BACnet interface to fan) </li></ul>
<ul><li> On board occupancy sensors </li></ul>

### Temperature Sensing
Fans can be programmed to turn on at certain temperature thresholds, and increase
speed with temperature, automating the thermal comfort control in a similar manner to a thermostat for a
traditional HVAC system.
<ul><li>  Manufacturer provided wall controller with built in temperature sensor (or remote temperature
probe) </li></ul>
<ul><li> Integration with BAS temperature sensor (e.g., via 0-10 V input, or BACnet interface to fan) </li></ul>
<ul><li> On board temperature sensing </li></ul>

### Learning Behaviours and/or Preference
Some ceiling fans are equipped with programming that learns user
preferences over time. For example, if a user frequently turns off the fan when the room temperature
drops to 74°F the fan will “learn” this user preference and start to automatically turn off at 74°F.

## Additional Considerations for Choosing a Control Type
There are a few things to consider when choosing a control mechanism for ceiling fans:

### Amperage Restrictions
The amperage of a wall control unit may limit the number of ceiling fans that can be controlled together
at once. For example, a wall control unit with an amperage of 5 amps could only control at most 5 fans at
once if the load of one fan is about 1 amp.

In general, the number of fans that may be in a space at once is limited by the National Electric Code
standards. The standard mandates that a circuit breaker not carry more than 80% of its rated current.
This means that for a standard circuit breaker with 15-20 amperage, the circuit breaker will only allow
about 12 fans (80% of 15).

To allow for more fans to be controlled at once, fans are often daisy-chained together. When fans are
daisy-chained, a control device controls one master fan and the rest of the fans are controlled by the
master fan by a variable-frequency drive.
### Remote Control Receiver
When using wireless wall controls or remote controls, each fan that is controlled must have a receiver.
Additionally, for each new fan desired to be controlled simultaneously with the existing fans, a new
receiver must be purchased. The frequency settings must then be reset in order for the receiver and
remote control to match.

## Airflow Direction 
All fans sold in the USA are required to be reversible, and thus, fans can run in either direction – forwards,
blowing downwards towards the floor, or in reverse, blowing upwards towards the ceiling. Many standard
ceiling fans will have a switch on either the wall switch, remote control, or on the motor housing to
change the direction between downwards and upwards. For some models this functionality will be
provided in the control system or smartphone app. Most applications are for fans blowing downwards, as
this is by far the more common and the more efficient way of creating air movement in the occupied
space. Reversing a fan so that it blows upwards against the ceiling requires that the space containing the
fan (or fans) is bounded by a ceiling and walls on all sides. This creates a similar recirculation cell as
blowing the fan downwards, but it avoids creating a region of high air speeds directly under the fan.
Running fans in reverse has the effect of creating a much lower, but much more uniform air speed
distribution in the space, which can be desirable in some applications.

One application of running fans in reverse is to mix air the room when elevated air speed in the occupied
zone is not desirable. One example is destratifying spaces in the heating season. Many fans have a
relatively high minimum rotational speed and if these fans run in the downwards direction, the resulting
air speeds may cause a draft on the occupants directly below the fan. This can be remedied by running
the fan in reverse. Note here that there are also fans that have a very low minimum speed, allowing them
to run forwards without creating a draft on the occupants, while still effectively de-stratifying the space.
This uses less power to destratify than a fan with a higher minimum speed running in reverse. Another
application of running fans in reverse is when elevated airspeed in the region directly under the fan is
perceived as excessive for some reason, such as causing paper to blow off a desk.

The ratio of air flow through a fan in the upwards vs. downwards direction depends on the fan type and
associated blade geometry. Some fans have highly optimized blade designs that blow downwards
efficiently. Here, the blade geometry is not symmetrical when the fan reverses direction, and these do
not generate as much airflow at the same rotational speed and power when operated in reverse. Other
fans, such as those with a less efficient but symmetrical blade geometry (e.g., flat blades) or those whose
blades can be inverted and re-attached to the fan (making the blade geometry symmetrical in reverse),
will generate approximately the same airflow operating in reverse.

For context, based on full scale laboratory testing the area weighted average air speed for seated and
standing occupants with a fan blowing upwards ranged from 30 to 70% that of the same fan blowing
downwards at the same speed in the same room. In cases where the blade geometry is symmetrical (flat
blades, or inverted blades), the area weighted average airspeed was approximately 60-70% that of the
downwards case. Obstructions in the flow from the fan (e.g., furniture, ceiling obstructions, etc.) will likely
have a significant effect on these percentages.