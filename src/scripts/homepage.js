import "./component/register-app.js";
import "./component/list-article.js";
import dataArticle from "./data/data-article.js";
import getVoucher from "./data/get-voucher.js";

const main = () =>
{
	//init
	const btn_order = document.querySelector(".order");
	const btn_login = document.querySelector(".login");
	const email_form = document.querySelector("email-form");
	const btn_subscribe = document.querySelector(".email-subscribe-submit");
	const list_article = document.querySelector(".article-row");
	

	const showArticle = async () =>
	{
		try
		{
			const result = await dataArticle.getArticle();
			renderResult(result);
		}
		catch(message_value)
		{
			alert(message_value);
		}
	}
	list_article.innerHTML = showArticle;

	const renderResult = results =>
	{
		list_article.articles = results;
	}
	
	const message_value = (message = "Silahkan hubungi kami untuk lebih lanjut") =>
	{
		alert(message);
	};

	
	btn_order.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa minggu kedepan");
	});

	
	btn_login.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa hari lagi");
	})

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

	const onProcess = async () =>
	{
		try
		{
			let email_input = document.querySelector(".email-user").value;
			//let email_input = document.querySelector(".email-user").value; sudah menggunakan bagian ini tapi nilai belum bisa masuk ke custom element
			const value = await getVoucher.checkVoucher(email_input);
			alert(value);
			document.querySelector(".email-user").value = "";
		}
		catch(message)
		{
			message_value(message);
		}
	}

	email_form.clickEvent = onProcess;

}

export default main;