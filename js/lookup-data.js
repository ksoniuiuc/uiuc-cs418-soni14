
const Matrices = {
    Projection: function () {
        var projection = glMatrix.mat4.create();
        glMatrix.mat4.perspective(projection, Math.PI / 6, 1.0, 0.1);
        return projection;
    },
    PlaneModel: function (time) {
        var plane = glMatrix.mat4.create();
        glMatrix.mat4.scale(plane, plane, [0.8, 0.8, 0.8]);
        glMatrix.mat4.translate(plane, plane, [-0.2, 0.4, -1.0]);
        glMatrix.mat4.rotateY(plane, plane, time * 0.0005);
        return plane
    },
    TeapotModel: function (time) {
        var model = glMatrix.mat4.create();
        glMatrix.mat4.scale(model, model, [0.89, 0.89, 0.89]);
        glMatrix.mat4.translate(model, model, [-0.2, 0.0, -1.0]);
        glMatrix.mat4.rotateY(model, model, time * 0.0005);
        return model
    },
    Shadow: function (time) {
        var shadow = glMatrix.mat4.create();
        glMatrix.mat4.translate(shadow, shadow, [-0.5, -0.3, -0.5]);
        glMatrix.mat4.scale(shadow, shadow, [1.0, 0.01, 0.6]);   
        glMatrix.mat4.rotateY(shadow, shadow, time * 0.0005);
        return shadow
    },
    View: function () {
        var view = glMatrix.mat4.create();
        let eye = glMatrix.vec3.fromValues(-1, 0.4, 1);
        let camera = glMatrix.vec3.fromValues(0.2, -0.5, -2.0);
        let up = glMatrix.vec3.fromValues(0, 1, 0);
        glMatrix.mat4.lookAt(view, eye, camera, up);
        return view
    },
    Normal: function (modelView) {
        var normal = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normal, modelView);
        return normal
    },
    bind: function (shape) {
        //
        // set up transformation matrices
        //
        gl.uniformMatrix4fv(programLookupData.uniformLocations.modelMatrix, false, shape);
        var view = Matrices.View();
        gl.uniformMatrix4fv(programLookupData.uniformLocations.viewMatrix, false, view);
        var modelView = glMatrix.mat4.create();
        glMatrix.mat4.multiply(modelView, view, shape)
        gl.uniformMatrix3fv(programLookupData.uniformLocations.normalMatrix, false, Matrices.Normal(modelView));
        gl.uniformMatrix4fv(programLookupData.uniformLocations.projectionMatrix, false, Matrices.Projection());
    
    }
};