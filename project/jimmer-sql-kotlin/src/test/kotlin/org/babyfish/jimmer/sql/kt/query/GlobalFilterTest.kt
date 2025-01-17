package org.babyfish.jimmer.sql.kt.query

import org.babyfish.jimmer.sql.kt.KSqlClient
import org.babyfish.jimmer.sql.kt.ast.expression.eq
import org.babyfish.jimmer.sql.kt.common.AbstractQueryTest
import org.babyfish.jimmer.sql.kt.filter.KFilter
import org.babyfish.jimmer.sql.kt.filter.KFilterArgs
import org.babyfish.jimmer.sql.kt.model.inheritance.*
import kotlin.test.BeforeTest
import kotlin.test.Test

class GlobalFilterTest : AbstractQueryTest() {

    private lateinit var _sqlClient: KSqlClient

    private lateinit var _sqlClientForDeleted: KSqlClient

    @BeforeTest
    fun initialize() {
        _sqlClient = sqlClient {
            addFilters(UNDELETED_FILTER)
            addDisabledFilters(DELETED_FILTER)
        }
        _sqlClientForDeleted = _sqlClient.filters {
            disable(UNDELETED_FILTER)
            enable(DELETED_FILTER)
        }
    }

    @Test
    fun testQueryUndeletedRoleWithPermissions() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        permissions {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from PERMISSION as tb_1_ 
                    |where tb_1_.ROLE_ID = ? and tb_1_.DELETED = ?""".trimMargin()
            ).variables(100L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"permissions":[
                    |--->--->--->{
                    |--->--->--->--->"name":"p_1",
                    |--->--->--->--->"deleted":false,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":1000
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":100
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryUndeletedPermissionWithRole() {
        executeAndExpect(
            _sqlClient.createQuery(Permission::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        role {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID 
                    |from PERMISSION as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ where tb_1_.ID in (?, ?) 
                    |and tb_1_.DELETED = ?""".trimMargin()
            ).variables(100L, 200L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"p_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"role":{
                    |--->--->--->"name":"r_1",
                    |--->--->--->"deleted":false,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":100
                    |--->--->},
                    |--->--->"id":1000
                    |--->},{
                    |--->--->"name":"p_3",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"role":null,
                    |--->--->"id":3000
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryUndeletedAdministratorWithRoles() {
        executeAndExpect(
            _sqlClient.createQuery(Administrator::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        roles {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_2_.ADMINISTRATOR_ID, tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |inner join ADMINISTRATOR_ROLE_MAPPING as tb_2_ on tb_1_.ID = tb_2_.ROLE_ID 
                    |where tb_2_.ADMINISTRATOR_ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(1L, 3L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"a_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"roles":[
                    |--->--->--->{
                    |--->--->--->--->"name":"r_1",
                    |--->--->--->--->"deleted":false,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":100
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":1
                    |--->},{
                    |--->--->"name":"a_3",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"roles":[
                    |--->--->--->{
                    |--->--->--->--->"name":"r_1",
                    |--->--->--->--->"deleted":false,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":100
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":3
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryUndeletedRoleWithAdministrators() {
        executeAndExpect(
            _sqlClient.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        administrators {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |inner join ADMINISTRATOR_ROLE_MAPPING as tb_2_ on tb_1_.ID = tb_2_.ADMINISTRATOR_ID 
                    |where tb_2_.ROLE_ID = ? and tb_1_.DELETED = ?""".trimMargin()
            ).variables(100L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"administrators":[
                    |--->--->--->{
                    |--->--->--->--->"name":"a_1",
                    |--->--->--->--->"deleted":false,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":1
                    |--->--->--->},{
                    |--->--->--->--->"name":"a_3",
                    |--->--->--->--->"deleted":false,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":3
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":100
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryUndeletedAdministratorWithAdministratorMetadata() {
        executeAndExpect(
            _sqlClient.createQuery(Administrator::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        metadata {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_1_.ADMINISTRATOR_ID, tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.EMAIL, tb_1_.WEBSITE 
                    |from ADMINISTRATOR_METADATA as tb_1_ 
                    |where tb_1_.ADMINISTRATOR_ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(1L, 3L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"a_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"metadata":{
                    |--->--->--->"name":"am_1",
                    |--->--->--->"deleted":false,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"email":"email_1",
                    |--->--->--->"website":"website_1",
                    |--->--->--->"id":10
                    |--->--->},
                    |--->--->"id":1
                    |--->},{
                    |--->--->"name":"a_3",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"metadata":{
                    |--->--->--->"name":"am_3",
                    |--->--->--->"deleted":false,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"email":"email_3",
                    |--->--->--->"website":"website_3",
                    |--->--->--->"id":30
                    |--->--->},
                    |--->--->"id":3
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryUndeletedAdministratorMetadataWithAdministrator() {
        executeAndExpect(
            _sqlClient.createQuery(AdministratorMetadata::class) {
                select(
                    table.fetchBy {
                        allTableFields()
                        administrator {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.EMAIL, tb_1_.WEBSITE, tb_1_.ADMINISTRATOR_ID 
                    |from ADMINISTRATOR_METADATA as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(false)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(1L, 3L, false)
            rows(
                """[
                    |--->{
                    |--->--->"name":"am_1",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"email":"email_1",
                    |--->--->"website":"website_1",
                    |--->--->"administrator":{
                    |--->--->--->"name":"a_1",
                    |--->--->--->"deleted":false,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":1
                    |--->--->},
                    |--->--->"id":10
                    |--->},{
                    |--->--->"name":"am_3",
                    |--->--->"deleted":false,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"email":"email_3",
                    |--->--->"website":"website_3",
                    |--->--->"administrator":{
                    |--->--->--->"name":"a_3",
                    |--->--->--->"deleted":false,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":3
                    |--->--->},
                    |--->--->"id":30
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedRoleWithPermissions() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        permissions {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from PERMISSION as tb_1_ 
                    |where tb_1_.ROLE_ID = ? and tb_1_.DELETED = ?""".trimMargin()
            ).variables(200L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"permissions":[
                    |--->--->--->{
                    |--->--->--->--->"name":"p_4",
                    |--->--->--->--->"deleted":true,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":4000
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":200
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedPermissionWithRole() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(Permission::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        role {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.ROLE_ID 
                    |from PERMISSION as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ where tb_1_.ID in (?, ?) 
                    |and tb_1_.DELETED = ?""".trimMargin()
            ).variables(100L, 200L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"p_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"role":null,
                    |--->--->"id":2000
                    |--->},{
                    |--->--->"name":"p_4",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"role":{
                    |--->--->--->"name":"r_2",
                    |--->--->--->"deleted":true,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":200
                    |--->--->},
                    |--->--->"id":4000
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedAdministratorWithRoles() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(Administrator::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        roles {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_2_.ADMINISTRATOR_ID, tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |inner join ADMINISTRATOR_ROLE_MAPPING as tb_2_ on tb_1_.ID = tb_2_.ROLE_ID 
                    |where tb_2_.ADMINISTRATOR_ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(2L, 4L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"a_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"roles":[
                    |--->--->--->{
                    |--->--->--->--->"name":"r_2",
                    |--->--->--->--->"deleted":true,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":200
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":2
                    |--->},{
                    |--->--->"name":"a_4",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"roles":[
                    |--->--->--->{
                    |--->--->--->--->"name":"r_2",
                    |--->--->--->--->"deleted":true,"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":200
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":4
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedRoleWithAdministrators() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(Role::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        administrators {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ROLE as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |inner join ADMINISTRATOR_ROLE_MAPPING as tb_2_ on tb_1_.ID = tb_2_.ADMINISTRATOR_ID 
                    |where tb_2_.ROLE_ID = ? and tb_1_.DELETED = ?""".trimMargin()
            ).variables(200L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"r_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"administrators":[
                    |--->--->--->{
                    |--->--->--->--->"name":"a_2",
                    |--->--->--->--->"deleted":true,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":2
                    |--->--->--->},{
                    |--->--->--->--->"name":"a_4",
                    |--->--->--->--->"deleted":true,
                    |--->--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->--->"id":4
                    |--->--->--->}
                    |--->--->],
                    |--->--->"id":200
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedAdministratorWithAdministratorMetadata() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(Administrator::class) {
                select(
                    table.fetchBy {
                        allScalarFields()
                        metadata {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_1_.ADMINISTRATOR_ID, tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.EMAIL, tb_1_.WEBSITE 
                    |from ADMINISTRATOR_METADATA as tb_1_ 
                    |where tb_1_.ADMINISTRATOR_ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(2L, 4L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"a_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"metadata":{
                    |--->--->--->"name":"am_2",
                    |--->--->--->"deleted":true,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"email":"email_2",
                    |--->--->--->"website":"website_2",
                    |--->--->--->"id":20
                    |--->--->},
                    |--->--->"id":2
                    |--->},{
                    |--->--->"name":"a_4",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"metadata":{
                    |--->--->--->"name":"am_4",
                    |--->--->--->"deleted":true,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"email":"email_4",
                    |--->--->--->"website":"website_4",
                    |--->--->--->"id":40
                    |--->--->},
                    |--->--->"id":4
                    |--->}
                    |]""".trimMargin()
            )
        }
    }

    @Test
    fun testQueryDeletedAdministratorMetadataWithAdministrator() {
        executeAndExpect(
            _sqlClientForDeleted.createQuery(AdministratorMetadata::class) {
                select(
                    table.fetchBy {
                        allTableFields()
                        administrator {
                            allScalarFields()
                        }
                    }
                )
            }
        ) {
            sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME, tb_1_.EMAIL, tb_1_.WEBSITE, tb_1_.ADMINISTRATOR_ID 
                    |from ADMINISTRATOR_METADATA as tb_1_ 
                    |where tb_1_.DELETED = ?""".trimMargin()
            ).variables(true)
            statement(1).sql(
                """select tb_1_.ID, tb_1_.NAME, tb_1_.DELETED, tb_1_.CREATED_TIME, tb_1_.MODIFIED_TIME 
                    |from ADMINISTRATOR as tb_1_ 
                    |where tb_1_.ID in (?, ?) and tb_1_.DELETED = ?""".trimMargin()
            ).variables(2L, 4L, true)
            rows(
                """[
                    |--->{
                    |--->--->"name":"am_2",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"email":"email_2",
                    |--->--->"website":"website_2",
                    |--->--->"administrator":{
                    |--->--->--->"name":"a_2",
                    |--->--->--->"deleted":true,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":2
                    |--->--->},
                    |--->--->"id":20
                    |--->},{
                    |--->--->"name":"am_4",
                    |--->--->"deleted":true,
                    |--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->"email":"email_4",
                    |--->--->"website":"website_4",
                    |--->--->"administrator":{
                    |--->--->--->"name":"a_4",
                    |--->--->--->"deleted":true,
                    |--->--->--->"createdTime":"2022-10-03 00:00:00",
                    |--->--->--->"modifiedTime":"2022-10-03 00:10:00",
                    |--->--->--->"id":4
                    |--->--->},
                    |--->--->"id":40
                    |--->}
                    |]""".trimMargin()
            )
        }
    }
}

private val UNDELETED_FILTER: KFilter<NamedEntity> =
    object: KFilter<NamedEntity> {

        override fun filter(args: KFilterArgs<NamedEntity>) =
            args.where(args.table.deleted eq false)
    }

private val DELETED_FILTER: KFilter<NamedEntity> =
    object: KFilter<NamedEntity> {

        override fun filter(args: KFilterArgs<NamedEntity>) =
            args.where(args.table.deleted eq true)
    }