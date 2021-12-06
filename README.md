# cs418-fa21-project


## TITLE
Marauders' Pot

#### CAPTION
Moony, Wormtail, Padfoot and Prongs, proudly presents their "The Levitating Cauldron"


<br/>

### Required Elements:

&check; Geometry Processing:<br/>
    The Teapot, Plane and the Shadow have been processed by creating them using GL MATRIX library, transforming them and then applying the projection matrix in Vertex Shader and passing the vertex position to Fragment shader for coloring.

&check; Smooth Per-Pixel Shading: <br/>
    The Smooth surface per pixel shading has been done using Phong Lighting model.

&check; Diffuse Reflectance:<br/>
    Phong Formula has been used for the diffused Reflectance. It is implemented by using 1 light source at position vec3(2.0, 2.0, 2.0) and surfaces away from the light source do not reflect any light.

&check; Specular Highlights: <br/>
    Phong Formula has been used for Specular Highlights. It is implemented by using 1 light source at position vec3(2.0, 2.0, 2.0) with a gleem component of 60.

&check; Surface Texture: <br/>
    A texture image of "Harry Potter", "Lightning Bolt" and "Hogwarts Logo" has been used for texturing the teapot. The texture coordinated were computed using a cylindrical texture coordinate formula 1.0-((atan(vPosition.z, vPosition.x))/(2.0 * M_PI)).

&check; Reflective Surface: <br/>
    Hogwarts' Great Staircases Image have been used as Environment Map for specular Reflectance.
    
<br/>

### Additional Elements - For Extra Credits:

&check; Bump Mapping:<br/> 
Bump mapping has been implemented by creating a "Normal Map" version of Texture Image and then using the Bump mapping formula with Normal Map teture coordinates.

&check; Shadow Projection: <br/>
Shadow projection onto a plane has been implemented by creating another version of teapot and scaling the Y-coordinates
to 0.01 ~ ZERO. Also, coloring the shadow matrix as BLACK to give a sense of Shadow.

&check; Procedural Texture: <br/>
Procedural Texture has been implmented on the "Plane" by using below computation - <br/>
planeCoordinates.s = vPosition.x;
planeCoordinates.t = vPosition.z