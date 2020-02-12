/*
 * Generated file ..  Product version: 1.0.0-SNAPSHOT
 *
 * Part of the This is the files AP definitions
 *
 * (c) 2019 Nutanix Inc.  All rights reserved
 *
 */

package common.unversioned.a1.api.info;

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
    public interface NamespaceApiControllerInterface {

            @RequestMapping(value = "/common/unversioned.a1/api.info/namespaces",
                produces = { "application/json" }, 
            method = RequestMethod.GET)
        ResponseEntity<common.v5.r0.a1.response.NamespaceListApiResponse

>getAllNamespaces();



            @RequestMapping(value = "/common/unversioned.a1/api.info/namespaces/{id}",
                produces = { "application/json" }, 
            method = RequestMethod.DELETE)
        ResponseEntity<common.v5.r0.a1.response.NamespaceApiResponse

>getNamespaceById(@PathVariable("id") String id



);


    }

