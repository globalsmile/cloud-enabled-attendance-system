-- Creates the production database, user, and grants privileges

CREATE DATABASE IF NOT EXISTS attendance_sys_prod_db;
CREATE USER IF NOT EXISTS 'attendance_sys_prod'@'127.0.0.1' IDENTIFIED BY 'Securepass123@';

-- Limit access to `performance_schema` for monitoring purposes only
GRANT SELECT ON performance_schema.* TO 'attendance_sys_prod'@'127.0.0.1';

-- Grant only necessary privileges to the production database
GRANT SELECT, INSERT, UPDATE, DELETE ON attendance_sys_prod_db.* TO 'attendance_sys_prod'@'127.0.0.1';


-- Flush privileges to apply changes
FLUSH PRIVILEGES;

