import { QrCodeOutline} from "react-ionicons";
const Footer = () => {
	return (
		<div className="w-full flex md:flex-column-reverse flex-col md:gap-0 gap-1 items-center justify-between py-8 px-10 border-t border-slate-300 border-dashed">
			<span className="font-medium text-slate-700">
				Copyright © 2024 Fun Phonics.
			</span>
			<div className="flex items-center gap-1">
				<span
					className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
				>
					Scannez le QR Code avec votre smartphone
				</span>
				<QrCodeOutline
					color="#60a5fa"
					style={{ width: 60, height: 60 }}
				/>
			</div>
		</div>
	);
};

export default Footer;