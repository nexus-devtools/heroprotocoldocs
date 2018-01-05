# File Format & Tools

.StormReplay files are [MPQ archives](https://en.wikipedia.org/wiki/MPQ).

## StormReplay File locations
**Windows**: `C:\Users[Your Name]\Documents\Heroes of the Storm\Accounts[Account Number][Hero ID]\Replays`

**Mac**: `/User/[Your Name]/Blizzard/Heroes of the Storm/Accounts/[Account Number]/[Hero ID]/Replays`

- **[Your Name]** is the username you use to login to your computer. 
- **[Account Number]** is the number Blizzard assigns to your Battle.net account. 
- **[Hero ID]** is a unique string specific to Heroes of the Storm. It usually looks something 1-Hero-1111.

## MPQ Archive Tools and Protocol Decoders

- https://github.com/Blizzard/heroprotocol - The canonical HotS replay decoder developed by Blizzard
- https://github.com/barrett777/Heroes.ReplayParser - Ben Barrett's excellent (and probably the most complete) C# HotS replay parser
- https://github.com/nydus/heroprotocol - Javascript port of Blizzard's replay decoder
- https://github.com/nexus-devtools/empeeku - Javascript library for reading MPQ archives
