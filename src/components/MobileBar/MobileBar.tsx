import React from 'react';

import useStore from '@store/store';
import PlusIcon from '@icon/PlusIcon';
import MenuIcon from '@icon/MenuIcon';
import useAddChat from '@hooks/useAddChat';

const MobileBar = () => {
   const generating = useStore((state) => state.generating);
   const setHideSideMenu = useStore((state) => state.setHideSideMenu);
   const hideSideMenu = useStore((state) => state.hideSideMenu);
   const chatTitle = useStore((state) =>
      state.chats &&
         state.chats.length > 0 &&
         state.currentChatIndex >= 0 &&
         state.currentChatIndex < state.chats.length
         ? state.chats[state.currentChatIndex].title
         : 'New Chat'
   );

   const addChat = useAddChat();

   return (
      <div className='sticky top-0 left-0 w-full z-50 flex items-center border-b border-custom-white/20 bg-neutral-dark pl-1 pt-1.5 pb-1 text-custom-white sm:pl-3'>
         <button
            type='button'
            className='-ml-0.5 -mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-light'
            onClick={() => {
               setHideSideMenu(!hideSideMenu);
            }}
         >
            <span className='sr-only'>Open sidebar</span>
            <MenuIcon />
         </button>
         <h1 className='flex-1 text-center text-base font-normal px-2 py-0 max-h-20 overflow-y-auto'>
            {chatTitle}
         </h1>
         <button
            type='button'
        className={`px-3 text-custom-white transition-opacity ${
          generating
                  ? 'cursor-not-allowed opacity-40'
                  : 'cursor-pointer opacity-100'
               }`}
            onClick={() => {
               if (!generating) addChat();
            }}
         >
            <div className='-ml-0.5 -mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-neutral-light'>
               <PlusIcon className='h-6 w-6' />
            </div>
         </button>
      </div>
   );
};

export default MobileBar;
