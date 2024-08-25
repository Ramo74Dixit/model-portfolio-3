import React from 'react'

const Profile = () => {
  return (
    <div className='flex'>
        <div className='mb-5 ml-0'>
          <img src='./HomeImage.png' alt='Home'></img>
        </div>
        <div className='ml-auto flex flex-col justify-center items-center w-full'>
          <div className='text-xl  font-[Klee One] text-center  ml-20'> 
          <h3 className="text-justify ml-20">
              1992/5/14生まれ、日本とカナダのハーフ。
            </h3>
            <h3 className="text-justify ml-20">16歳でファッションモデルデビュー。</h3>
            <h3 className="text-justify ml-20">
              デビュー1年目にしてフジテレビ“すぽると！”の
              <br />
              レギュラーに大抜擢される。
            </h3>
            <h3 className="text-justify ml-20">
              2013年に1st写真集、2015年には2nd写真集と
              <br />
              スタイルブックを同時発売、2018年に3rd写真集を発売。
            </h3>
            <h3 className="w-[60%] text-justify ml-20">
              2016年に、ViVi専属モデルを卒業し、“sweet”や“BAILA”“SENSE”など多数ファッション誌に出演中。
              <br />
              2019年、オリジナルプロテインCRASをプロデュース。
              <br />
              2020年には自身のコスメブランド「LAPERICUM」を設立し、
              <br />
              クリエイティブな分野でも活躍の場を広げている。
            </h3>
            <h3 className="text-justify ml-20">
              同年、車好きが高じて公式YouTubeチャンネル
              <br />
              「MAGGY‘s Beauty and the Speed」を開設し、
              <br />
              モデルのマギーとは異なった一面を見せている。
            </h3>
          </div>
        </div>
    </div>
  )
}

export default Profile
