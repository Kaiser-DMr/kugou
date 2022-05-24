<template>
  <div class="Music-box">
    <audio
      src="https://webfs.tx.kugou.com/202205231025/72bb9f25703714a3db9c6fb1bd15d81e/KGTX/CLTX001/a224e7cb2b987f24cef238ec2e47c6d1.mp3"
    ></audio>
    <div class="classify">
      <el-collapse accordion>
        <el-collapse-item>
          <template slot="title"> 热门榜单 </template>
          <div
            v-for="item in mymusic"
            :key="item.id"
            class="ms1name"
            @click="Switchlist(item.rankid)"
          >
            <a href="#">{{ item.rankname }}</a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="特色音乐榜">
          <div
            v-for="item in mymusic2"
            :key="item.id"
            class="ms2name"
            @click="Switchlist(item.rankid)"
          >
            <a href="#">{{ item.rankname }}</a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="全球榜">
          <div
            v-for="item in mymusic3"
            :key="item.id"
            class="ms3name"
            @click="Switchlist(item.rankid)"
          >
            <a href="#"> {{ item.rankname }}</a>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <div class="home-ce">
      <!-- <div class="ce-xhx"></div> -->
      <div class="ce-xhx">
        <div class="ce-xr">
          <h2>
            {{ musicphb.info ? musicphb.info.rankname : "排行榜" }}
          </h2>
          <div>2022-05-20 更新</div>
        </div>
        <el-button class="ce-sj-bt" type="primary">播放全部</el-button>
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @cell-mouse-enter="cellmouseenter"
        @cell-mouse-leave="cellmouseleave"
        @cell-click="addAudolist"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column
          label="全选"
          width="50"
          type="index"
          class="el-icon-share"
        >
        </el-table-column>
        <!-- <i class="el-icon-share"></i> -->
        <!-- <i class="&#xe619;">11111</i> -->
        <el-table-column
          prop="filename"
          label=""
          width="400"
          margin-right="60"
          stripe
          highlight-current-row
        >
          <!-- <i class="&#xe619;">11111</i> -->
        </el-table-column>
        <el-table-column prop="has_accompany" label="" show-overflow-tooltip>
          <template class="bofangqi">
            <i class="el-icon-video-play"></i>
            <i class="el-icon-download" style="margin: 0 10px"></i>
            <i class="el-icon-share"></i>
          </template>
        </el-table-column>
        <el-table-column prop="has_accompany" label="" show-overflow-tooltip>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mymusic: {},
      mymusic2: {},
      mymusic3: {},
      musicphb: {},
      dflist: 8888,
      tableData: [],
      multipleSelection: [],
      condition: false,
    };
  },
  async created() {
    const res = await this.$myAxios("/rank/list&json=true");

    // const res3 = await this.$myAxios("/plist/list/125032?json=true");
    // console.log(res3);

    this.mymusic = res.data.rank.list.splice(0, 11);
    this.mymusic2 = res.data.rank.list.splice(12, 19);
    this.mymusic3 = res.data.rank.list;
    const res2 = await this.$myAxios(
      `/rank/info/?rankid=${this.dflist}&json=true`
    );
    this.musicphb = res2.data;
    this.tableData = this.musicphb.songs.list;
    // this.tableData = push();
    // console.log(this.mymusic);
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    // 触碰到时变红____________________
    cellmouseenter(row, column, cell) {
      // console.log(cell);
      cell.style.color = "red";
      this.condition = true;
    },
    // 退出后恢复颜色
    cellmouseleave(row, column, cell) {
      cell.style.color = "black";
      this.condition = false;
    },

    change(row, column, cell) {
      cell.style.color = blur;
      // console.log(cell);
    },
    addAudolist(row) {
      console.log(row.filename);
      console.log(row.album_id);
      console.log(row.audio_id);
      console.log(row.hash);
    },
    async Switchlist(id) {
      // const id = id;

      this.dflist = id;
      const res2 = await this.$myAxios(
        `/rank/info/?rankid=${this.dflist}&json=true`
      );
      this.musicphb = res2.data;
      // console.log(this.musicphb.songs.list);
      this.tableData = this.musicphb.songs.list;
    },

  },
};
</script >
 
<style lang="less" scoped>
.Music-box {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
.classify {
  width: 201px;
  border: 1px solid #ccc;
  padding: 15px;
  margin-left: 10px;
  /* background-color: rgb(98, 98, 236); */
}
.ms1name {
  // margin: 10px 0;
  height: 36px;
  background-image: url("./imga/20161013180833243081.png");
  background-repeat: no-repeat;
  background-position: 0 center;
  padding-left: 36px;
  // background-color: #169af3;
  // text-align: center;
}
.ms2name {
  margin: 10px 0;
  background-image: url("./imga/20130807192258314669.png");
  background-repeat: no-repeat;
  background-position: 0 center;
  padding-left: 25px;
  // text-align: center;
}
.ms3name {
  margin: 10px 0;
  background-image: url("./imga/20200318163047812478.jpg");
  background-repeat: no-repeat;
  background-position: 0 center;
  padding-left: 25px;
  // text-align: center;
}
// .musicname:hover {
//   color: #00b5e5;

// }

.home-ce {
  // border: 1px solid #ccc;
  width: 700px;
  // display: flex;
  // space-between: baseline;
}
.ce-xhx {
  display: flex;
  border-bottom: 1px solid;
  height: 50px;
  align-items: center;
  padding: 30px 30px;
  justify-content: space-between;
}
.ce-xr {
  display: flex;
  line-height: 50px;
  div {
    line-height: 50px;
    margin-left: 30px;
    font-size: 8px;
    color: #ccc;
  }
}
.ce-sj-bt {
  display: flex;
  // justify-content: flex-end;
}
/deep/.el-tooltip i {
  display: none;
  // background-color: rebeccapurple;
  color: rgb(17, 146, 215);
}
</style>