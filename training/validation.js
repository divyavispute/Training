		function validateEmail(email)
		{
			var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			if(email.value.match(email))
				{
					return true;
				}
			else
				{
					alert("You have entered an invalid email address!");
					email.focus();
					return false;
				}
		}
		
		function validatePassword(passid,x,y)
		{
			var passid_len = passid.value.length;
			if (passid_len == 0 || passid_len >= y || passid_len < x)
			{
				{
					alert("Password should not be empty / length be between "+x+" to "+y);
					passid.focus();
					return false;
				}
				return true;
			}
		}

		function validateConfirmPassword(cpassid,cx,cy)
		{
			var cpassid_len = cpassid.value.length;
			if (cpassid_len == 0 || cpassid_len >= cy || cpassid_len < cx)
			{
				{
					alert("Password should not be empty / length be between "+cx+" to "+cy);
					cpassid.focus();
					return false;
				}
				return true;
			}
		}

		function validateFirstName(fname)
		{

			var letters = /^[A-Za-z]+$/;
			if(fname.value.match(letters)||fname!="")
				{
					return false;
				}
			else
			{
				alert('Username must have alphabet characters only');
				fname.focus();
			}
		}
		

		function validateLastName(lname)
		{
			var letters = /^[A-Za-z]+$/;
			if(lname.value.match(letters))
				{
					return true;
				}
			else
			{
				alert('Username must have alphabet characters only');
				lname.focus();
				return false;
			}

		}

		function validateZip(zip)
			{ 
				var numbers = /^[0-9]+$/;
				if(zip.value.match(numbers))
					{
						return true;
					}
				else
					{
						alert('ZIP code must have numeric characters only');
						zip.focus();
						return false;
					}
			}

		function formValidation()
		{
			var uemail = document.registration.email;
			var passid = document.registration.passid;
			var cpassid = document.registration.cpassid;
			var fname = document.registration.fname;
			var lname = document.registration.lname;
			var zip = document.registration.zip;
			{
				if(validateEmail(email))
					{
						if(validatePassword(passid,7,12))
							{
								if(validateConfirmPassword(cpassid,7,12))
									{
										if(validateFirstName(fname))
											{
												if(validateLastName(lname))
													{
														if(validateZip(zip))
															{
																return false;
															}
													}
											}
									}
							}
					}
			}
		}