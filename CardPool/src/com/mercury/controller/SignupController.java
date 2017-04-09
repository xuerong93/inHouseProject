package com.mercury.controller;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetails;
import org.springframework.security.web.savedrequest.RequestCache;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mercury.beans.Person;
import com.mercury.dao.PersonDao;


@Controller
public class SignupController {
	@Autowired
	private PersonDao pd;
    @Autowired
    RequestCache requestCache;

    @Autowired
    @Qualifier("authenticationManager")
    protected AuthenticationManager authenticationManager;
    
    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    @ResponseBody
    public String createNewUser(@RequestBody Person user,  HttpServletRequest request, HttpServletResponse response) {
        pd.insertUser(user);
    	//After successfully Creating user
        authenticateUserAndSetSession(user, request);
        return "{\"address\":\"http://localhost:3000/cardpool\", \"username\":\""+ user.getUsername() +"\"}";
    }

    private void authenticateUserAndSetSession(Person user, HttpServletRequest request) {
        String username = user.getUsername();
        String password = user.getPassword();
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(username, password);

        // generate session if one doesn't exist
        request.getSession();

        token.setDetails(new WebAuthenticationDetails(request));
        Authentication authenticatedUser = authenticationManager.authenticate(token);

        SecurityContextHolder.getContext().setAuthentication(authenticatedUser);
    }
}
