var grunt = require('grunt'),
    taskPath = './Gruntfile/',
    taskNames = ['clean', 'ts'],
    tasks = [];

taskNames.forEach(function(taskName) {
    tasks.push(require(taskPath + taskName));
});

module.exports = function(grunt) {
    grunt.initConfig(tasks.reduce(function(allTasks, task) {
        var taskKey = Object.keys(task)[0];

        allTasks[taskKey] = task[taskKey];

        return allTasks;
    }));

    grunt.registerTask('default', ['clean', 'ts:app']);
    grunt.registerTask('dev', ['clean', 'ts:appDev']);
};
