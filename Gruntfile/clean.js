var grunt = require('grunt');

function clean() {
    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        clean: {
            dist: ['dist']
        }
    }
}

module.exports = clean();
