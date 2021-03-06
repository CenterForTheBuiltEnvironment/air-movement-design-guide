---
sidebar_position: 3
---

# Controls (new)

This section describe the control strategy that integrating the HVAC and fans system.

## Ceiling fan integration with Building Controls and Sequence of Operation 
Ceiling fans can be integrated with a BAS through a number of mechanisms. True integration requires
speed control of the fans and this is typically achieved using either a 0 - 10 V input or a BACnet interface.
Here, the fan may respond to zone temperature, acting as the first stage of cooling for a zone before the
HVAC system begins to operate in cooling mode. For example, for a zone with a fan and a VAV box, the
fan comes on first at 74 - 75 °F providing the first stage of cooling to the occupant. The fan speed
increases with zone air temperature until reaching 78 – 80 °F, at which point the VAV box begins to
modulate to maintain that setpoint, providing the second stage of cooling. Operating the VAV box at this
higher cooling setpoint has significant energy savings potential. The following figures provide control
schematics for both the HVAC system and the ceiling fan. Note that some ceiling fans have onboard
sensing and controls that allow for fan speed and temperature automation without integration with the
BAS.

### HVAC System Control
**One Figure here**

### Fan Speed Control
**One Figure here**

A lower cost, simpler alternative to automatically control the ceiling fan based on temperature is to use a
relay to switch power on or off to the fan(s). The fans then operate at a fixed preset speed. This only
provides on/off control, and as such can only be effective over a small range of temperatures without a
‘typical’ occupant in the space experiencing conditions that are either too warm (insufficient air
movement) or too cool (excessive air movement). This approach may be most applicable for designs that
either:

<ul><li> Use the ceiling fans predominantly to mix the air the space and aim for relatively low air speeds
 (e.g. ⩽ 50 fpm) in the occupied zone. Example applications include: destratification in heating, or air mixing to reduce
the need for distribution ductwork. </li></ul>
<ul><li> Are for spaces where variability in air speeds is likely beneficial (e.g. the occupants can easily move within
the space, such as a lobby, event space, or hallway). </li></ul>

Fan operation can also be tied to occupancy sensors in the zone, preventing unnecessary operation,
energy use, and maintenance. Lastly, note that in some cases, it may be beneficial to operate fans even
when unoccupied, such as pre-cooling applications that benefit from increased convection from surfaces
in the space due to the air movement generated by the fans.

## Types of Control and Consideration

## HVAC Integration