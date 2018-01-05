---
imports:
  JsonView: 'react-json-view'
  parser: '../parser'
---

# header

The header part of the MPQ archive contains top-level information about the archive. 
This information is essential to know which version you will need to decode. 
The structure of this section does not seem to change from protocol version to protocol version.
Most replay decoders use a very early version of a known working decoder to read this section 
only and extract the version information from it, and then load the remainder of the replay file using the 
correct protocol decoder version. 

```render
<JsonView  src={parser.get('header')} name="header" />
```
