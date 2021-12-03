
//
// draw callback function that is passed to requestAnimationFrame()
//

function draw(time) {
    clearGL()
    gl.useProgram(programLookupData.program);
    Textures.bind();
    drawTeapot(time);
    drawPlane(time);
    drawShadow(time);
    requestAnimationFrame(draw);
}


function drawPlane(time) {
    Matrices.bind(Matrices.PlaneModel(time))
    gl.bindVertexArray(plane_vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
    gl.vertexAttribPointer(programLookupData.attributeLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programLookupData.attributeLocations.vertexPosition);
    gl.uniform1i(programLookupData.uniformLocations.isPlane, true);
    gl.uniform1i(programLookupData.uniformLocations.isShadow, false);
    gl.drawElements(
        gl.TRIANGLES,
        plane.faces.length,
        gl.UNSIGNED_SHORT,
        0
    );
}

function drawTeapot(time) {
    Matrices.bind(Matrices.TeapotModel(time))
    gl.bindVertexArray(teapot_vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, teapotBuffer);
    gl.vertexAttribPointer(programLookupData.attributeLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programLookupData.attributeLocations.vertexPosition);
    gl.uniform1i(programLookupData.uniformLocations.isPlane, false);
    gl.uniform1i(programLookupData.uniformLocations.isShadow, false);
    gl.drawElements(
        gl.TRIANGLES,
        teapot.faces.length,
        gl.UNSIGNED_SHORT,
        0
    );
}


function drawShadow(time) {
    Matrices.bind(Matrices.Shadow(time))
    gl.bindVertexArray(shadow_vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, shadowBuffer);
    gl.vertexAttribPointer(programLookupData.attributeLocations.vertexPosition, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(programLookupData.attributeLocations.vertexPosition);
    gl.uniform1i(programLookupData.uniformLocations.isPlane, false);
    gl.uniform1i(programLookupData.uniformLocations.isShadow, true);
    gl.drawElements(
        gl.TRIANGLES,
        shadow.faces.length,
        gl.UNSIGNED_SHORT,
        0
    );
}