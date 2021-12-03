function loadshaders(vertexShaderSource, fragmentShaderSource) {
    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    gl.compileShader(vertexShader);
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS))
        alert("Vertex Shader Error:\n" + gl.getShaderInfoLog(vertexShader));

    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);
    gl.compileShader(fragmentShader);
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS))
        alert("Fragment Shader Error:\n" + gl.getShaderInfoLog(fragmentShader));

    //
    // Compile shaders
    //

    var shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))
        alert("Failed to setup shaders");

    return shaderProgram
}


function normalize(normals) {
    var x, y, z, d, i;
    for (i = 0; i < normals.length; i += 3) {
        x = teapot.normals[i];
        y = teapot.normals[i + 1];
        z = teapot.normals[i + 2];

        d = 1.0 / Math.sqrt(x * x + y * y + z * z);

        teapot.normals[i] *= d;
        teapot.normals[i + 1] *= d;
        teapot.normals[i + 2] *= d;

    }
}