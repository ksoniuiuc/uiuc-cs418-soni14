

function bindElementArrayBuffer(array) {
    gl.bindBuffer(
        gl.ELEMENT_ARRAY_BUFFER,
        gl.createBuffer()
    );

    gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array(array),
        gl.STATIC_DRAW
    );
}

function bindAndEnableArrayBuffer(buffer, dimension, array, glProperty) {
    gl.bindBuffer(
        gl.ARRAY_BUFFER,
        buffer
    );

    gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array(array),
        gl.STATIC_DRAW
    );

    gl.enableVertexAttribArray(glProperty);

    gl.vertexAttribPointer(
        glProperty,
        dimension,
        gl.FLOAT,
        false,
        0,
        0
    );
}