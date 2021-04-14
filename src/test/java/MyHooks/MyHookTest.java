package MyHooks;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class MyHookTest {

	@Before(order = 1)
	public void setup_Browser(Scenario sc){
		
		System.out.println("MyHooks Lunch the browser");
		System.out.println(sc.getName());  // this is use for get scenario name.
	}

	@Before(order = 2)
	public void setup_URL(){
		
		System.out.println("MyHooks Lunch the URL");
	}
	
	
	@After(order = 1)
	public void teardown_Logout(){
		
		System.out.println("MyHooks LOGOUT");
	}
	
	@After(order = 2)
	public void teardown_Close(Scenario sc){
		
		System.out.println("MyHooks close the browser");
		System.out.println(sc.getName());  // this is use for get scenario name.
	}
	
}
