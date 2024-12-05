'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AttendanceLogs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      session_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sessions',
          key: 'id',
        },
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM('present', 'absent', 'late'),
        allowNull: false,
      },
      check_in_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      check_out_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });

    // Adding an index on `user_id` for fast lookups by user
    await queryInterface.addIndex('AttendanceLogs', ['user_id']);
    // Adding an index on `session_id` for fast lookups by session
    await queryInterface.addIndex('AttendanceLogs', ['session_id']);
    // Adding an index on `status` for better filtering of attendance states (optional)
    await queryInterface.addIndex('AttendanceLogs', ['status']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AttendanceLogs');
  }
};

