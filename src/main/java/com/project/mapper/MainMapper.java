package com.project.mapper;

import com.project.vo.BoardVO;
import com.project.vo.Criteria;
import com.project.vo.MemberVO;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public interface MainMapper {

	/* 회원가입 */
	// 유저체크
	public MemberVO userCheck(MemberVO memberVO) throws Exception;

	// 아이디체크
	public int idCheck(String mb_id) throws Exception;

	// 닉네임 체크
	public int nickCheck(String mb_nick) throws Exception;

	// 회원가입
	public void memberRegister(MemberVO memberVO) throws Exception;


	/* 로그인 */
	// 아이디 찾기
	public String find_id(String email) throws Exception;

	//비밀번호 찾기(추가)
	// 비밀번호 변경
	public int update_pw(MemberVO memberVO) throws Exception;

	// 로그인
	public MemberVO memberLogin(MemberVO memberVO) throws Exception;





	
	//회원 강제추방(관리자페이지)
	public void dropUser(String id) throws Exception;

	//관리자 페이지 - 회원 리스트
	public List<MemberVO> dispAdmin() throws Exception;

	//보기만 가능한 게시판
	public List<BoardVO> boardList_view() throws Exception;
	
	public String now() throws Exception;

	//관리자 페이지(추가)
	Optional<MemberVO> findByUsername(String mb_id) throws Exception;

	
	// 회원정보 수정 - 세션 가져오기
	public MemberVO memberModifyGET(String mb_id) throws Exception;
	
	// 회원정보 수정 
	public void memberModifyPOST(MemberVO memberVO) throws Exception;
	
	// 회원 탈퇴
	public void memberDeletePOST(MemberVO memberVO) throws Exception;
	public MemberVO memberDeleteGET(String mb_id) throws Exception;

	// 닉네임 변경
	public void nickModifyPOST(MemberVO memberVO) throws Exception;
	public MemberVO nickModifyGET(String mb_id) throws Exception;

	//프로필 사진 변경
	public MemberVO profileModifyGET(String mb_id) throws Exception;
	public void profileModifyPOST(MemberVO memberVO) throws Exception;

	
	/* 게시판 */
	public void boardWrite(BoardVO boardVO) throws Exception;
	
	public List<Map<String, Object>> boardList(Criteria cri) throws Exception;
	
	public int boardListCnt() throws Exception;
	
	public BoardVO boardRead(int num) throws Exception;
	
	public void boardModify(BoardVO boardVO) throws Exception;

	public void boardModifyForm(int num) throws Exception;

	public void boardDelete(int num) throws Exception;
}
