import { SearchOutlined } from "@mui/icons-material";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../stores/slices/searchSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      dispatch(fetchProducts(searchTerm));
      setSearchTerm("");
    }
  };

  return (
    <div>
      <div className="form">
        <form
          className="d-flex justify-content-center align-items-center"
          role="search"
          onSubmit={handleSearch}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm sản phẩm"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Tooltip title="Tìm kiếm">
            <Button
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
              htmlType="submit"
            />
          </Tooltip>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
