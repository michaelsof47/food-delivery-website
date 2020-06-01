import "./component/register-app.js";


function main()
{
	const message_value = (message = "Silahkan hubungi kami untuk lebih lanjut") =>
	{
		alert(message);
	}

	const btn_order = document.querySelector(".order");
	btn_order.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa minggu kedepan");
	});

	const btn_login = document.querySelector(".login");
	btn_login.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa hari lagi");
	})

	const btn_subscribe = document.querySelector(".email-subscribe-submit");
	btn_subscribe.addEventListener("click",() =>
	{
		const edt_subscribe = document.querySelector(".email-subscribe");
		checkEmailSubscribe("",edt_subscribe)
		.then(message_value =>
			{
				alert(message_value);
				document.querySelector(".email-subscribe").value = "";
			})
		.catch(message_value =>
			{
				alert(message_value);
			})
	})

	const email_form = document.querySelector("email-form");
	const onProcess = () =>
	{
		let email_input = email_form.value;
		email_form.checkVoucherEmail("",email_input)
		.then(message_value =>
			{
				alert(message_value);
				document.querySelector(".email-user").value = "";
			})
		.catch(message_value =>
			{
				alert(message_value);
			})
	}

	email_form.clickEvent = onProcess;

}

export default main;