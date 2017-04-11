set serveroutput on size 1000000
set feedback off
-- Company, user group and user export
-- Generated 2017.04.11 16:17:03 by INHOUSEPROJECT
-- This script can be run in sqlplus as the owner of the Oracle flows engine.
begin
   wwv_flow_security.g_security_group_id := 6971210218264646;
end;
/
----------------
-- W O R K S P A C E
-- Creating a workspace will not create database schemas or objects.
-- This API will cause only meta data inserts.
prompt  Creating workspace INHOUSEPROJECT...
begin
wwv_flow_fnd_user_api.create_company (
  p_id                      => 6971528777264650,
  p_provisioning_company_id => 6971210218264646,
  p_short_name              => 'INHOUSEPROJECT',
  p_first_schema_provisioned=> 'INHOUSEPROJECT',
  p_company_schemas         => 'INHOUSEPROJECT');
end;
/
----------------
-- G R O U P S
--
prompt  Creating Groups...
----------------
-- U S E R S
-- User repository for use with flows cookie based authenticaion.
--
prompt  Creating Users...
begin
wwv_flow_fnd_user_api.create_fnd_user (
  p_user_id      => '6971426135264646',
  p_user_name    => 'INHOUSEPROJECT',
  p_first_name   => '',
  p_last_name    => '',
  p_description  => '',
  p_email_address=> '',
  p_web_password => '14ACED999ACF80A93CAC5A2601D98659',
  p_web_password_format => 'HEX_ENCODED_DIGEST',
  p_group_ids    => '',
  p_developer_privs=> 'ADMIN:CREATE:DATA_LOADER:EDIT:HELP:MONITOR:SQL',
  p_default_schema=> 'INHOUSEPROJECT',
  p_allow_access_to_schemas => '');
end;
/
commit;
set feedback on
prompt  ...done
