
import { BrainCog } from 'lucide-react';


function Header() {
    return      (
    <div className="p-6 bg-gradient-to-r from-indigo-500 to-purple-500">
      <div className="flex items-center gap-2 mb-2">
        <BrainCog className="w-6 h-6 text-white" />
        <h1 className="text-xl font-bold text-white">Maaira - AI Research</h1>
      </div>
      <p className="text-sm text-indigo-100">
        Good Morning! You have 2 task for today. How can I help you?
      </p>
      <p className="text-sm text-indigo-100">
        How can I help you?
      </p>
    </div> )
;
}

export default Header;