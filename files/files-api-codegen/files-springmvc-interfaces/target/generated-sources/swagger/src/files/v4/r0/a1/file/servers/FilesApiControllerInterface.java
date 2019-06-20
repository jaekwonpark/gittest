/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package files.v4.r0.a1.file_servers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.util.MultiValueMap;

import java.util.List;
    @javax.annotation.Generated(value = "com.github.krr.swagger.codegen.generators.SpringMvcApiInterfaceGenerator", date = "2019-06-18T15:25:12.592-07:00[America/Los_Angeles]")
    public interface FilesApiControllerInterface {

            @RequestMapping(value = "/files/v4.r0.a1/file_servers/file_servers",
            method = RequestMethod.POST)
        ResponseEntity createFileServers();



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets",
            method = RequestMethod.POST)
        ResponseEntity createMountTargets(@PathVariable("uuid") String uuid



);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}",
            method = RequestMethod.DELETE)
        ResponseEntity deleteFileServer(@PathVariable("file_server_uuid") String fileServerUuid



);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}",
            method = RequestMethod.DELETE)
        ResponseEntity deleteMountTarget(@PathVariable("uuid") String uuid



,@PathVariable("mount_target_uuid") String mountTargetUuid



);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/file_servers",
                produces = { "application/json" }, 
            method = RequestMethod.GET)
        ResponseEntity<common.v5.r0.a1.response.FileServerListApiResponse

>getAllFileServers(@PathVariable("uuid") String uuid



, @RequestParam(value = "$sort", required = false)List<String> $sort



, @RequestParam(value = "$page", required = false)Long $page



, @RequestParam(value = "$limit", required = false)Long $limit



,MultiValueMap<String, String> allQueryParams);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets",
                produces = { "application/json" }, 
            method = RequestMethod.GET)
        ResponseEntity<common.v5.r0.a1.response.MountTargetListApiResponse

>getAllMountTargets(@PathVariable("uuid") String uuid



, @RequestParam(value = "$sort", required = false)List<String> $sort



, @RequestParam(value = "$page", required = false)Long $page



, @RequestParam(value = "$limit", required = false)Long $limit



,MultiValueMap<String, String> allQueryParams);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/file_servers/{file_server_uuid}",
                produces = { "application/json" }, 
            method = RequestMethod.GET)
        ResponseEntity<common.v5.r0.a1.response.FileServerApiResponse

>getFileServerByUuid(@PathVariable("file_server_uuid") String fileServerUuid



);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets/{mount_target_uuid}",
                produces = { "application/json" }, 
            method = RequestMethod.GET)
        ResponseEntity<common.v5.r0.a1.response.MountTargetApiResponse

>getMountTargetByUuid(@PathVariable("uuid") String uuid



,@PathVariable("mount_target_uuid") String mountTargetUuid



);



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/file_servers",
            method = RequestMethod.PUT)
        ResponseEntity updateFileServers();



            @RequestMapping(value = "/files/v4.r0.a1/file_servers/{uuid}/mount_targets",
            method = RequestMethod.PUT)
        ResponseEntity updateMountTargets(@PathVariable("uuid") String uuid



);


    }

