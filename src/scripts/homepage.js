import getVoucher from "./data/get-voucher.js";
import "./component/list-article.js";
import dataArticle from "./data/data-article.js";

const homepage = () =>
{
	//init
	//const btn_order = document.querySelector(".order");
	//const btn_login = document.querySelector(".login");
	const btn_register = document.querySelector(".btn_email");
	const list_article = document.querySelector("list-article");
	const btn_subscribe = document.querySelector(".email-subscribe-submit");

	const showArticle = async () =>
	{
		try
		{
			const result = await dataArticle.getArticle();
			renderResult(result);
		}
		catch(e)
		{
			message_value(e);
		}
	}
	showArticle();

	const renderResult = results =>
	{
		list_article.articles = results;
	}
	
	const message_value = (message = "Silahkan hubungi kami untuk lebih lanjut") =>
	{
		alert(message);
	};

	
	/*btn_order.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa minggu kedepan");
	});

	
	btn_login.addEventListener("click",() =>
	{
		message_value("Fitur ini akan tersedia dalam beberapa hari lagi");
	})*/

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

	btn_register.addEventListener("click", () =>
	{
		try
		{
			let register_form = document.querySelector(".email-user").value;
			getVoucher.checkVoucher(register_form)
			.then((message) =>
			{
				message_value(message);
			}
			).catch((error) =>
			{
				message_value(error);
			});
		}
		catch (e)
		{
			alert(`Error pada ${e}`);
		}
	})
}

export default homepage;